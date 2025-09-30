"use strict"

var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {
        "default": mod
    }
}

Object.defineProperty(exports, "__esModule", {
    value: true
})

const node_cache_1 = __importDefault(require("@cacheable/node-cache"))
const boom_1 = require("@hapi/boom")
const crypto_1 = require("crypto")
const WAProto_1 = require("../../WAProto")
const Defaults_1 = require("../Defaults")
const Types_1 = require("../Types")
const Utils_1 = require("../Utils")
const WABinary_1 = require("../WABinary")
const groups_1 = require("./groups")
const make_mutex_1 = require("../Utils/make-mutex")
const messages_send_1 = require("./messages-send")

const makeMessagesRecvSocket = (config) => {
    const {
        logger,
        retryRequestDelayMs,
        maxMsgRetryCount,
        getMessage,
        shouldIgnoreJid,
        enableAutoSessionRecreation
    } = config
    const sock = messages_send_1.makeMessagesSocket(config)
    const {
        ev,
        authState,
        ws,
        processingMutex,
        signalRepository,
        query,
        upsertMessage,
        resyncAppState,
        onUnexpectedError,
        assertSessions,
        sendNode,
        relayMessage,
        sendReceipt,
        uploadPreKeys,
        groupMetadata,
        getUSyncDevices,
        createParticipantNodes,
        messageRetryManager,
        sendPeerDataOperationMessage
    } = sock

    const retryMutex = make_mutex_1.makeMutex()

    const groupDataCache = new Map()
    global.groupMetadataCache = async (jid) => {
        if (!groupDataCache.has(jid)) {
            groupDataCache.set(jid, groupMetadata(jid))
        }
        return await groupDataCache.get(jid)
    }

    const msgRetryCache = config.msgRetryCounterCache || new node_cache_1.default({
        stdTTL: Defaults_1.DEFAULT_CACHE_TTLS.MSG_RETRY,
        useClones: false
    })

    const callOfferCache = config.callOfferCache || new node_cache_1.default({
        stdTTL: Defaults_1.DEFAULT_CACHE_TTLS.CALL_OFFER,
        useClones: false
    })

    const placeholderResendCache = config.placeholderResendCache || new node_cache_1.default({
        stdTTL: Defaults_1.DEFAULT_CACHE_TTLS.MSG_RETRY,
        useClones: false
    })

    let sendActiveReceipts = false

    const sendMessageAck = async ({
        tag,
        attrs,
        content
    }, errorCode) => {
        const stanza = {
            tag: 'ack',
            attrs: {
                id: attrs.id,
                to: attrs.from,
                class: tag
            }
        }

        if (!!errorCode) {
            stanza.attrs.error = errorCode.toString()
        }

        if (!!attrs.participant) {
            stanza.attrs.participant = attrs.participant
        }

        if (!!attrs.recipient) {
            stanza.attrs.recipient = attrs.recipient
        }

        if (!!attrs.type && (tag !== 'message' || WABinary_1.getBinaryNodeChild({
                tag,
                attrs,
                content
            }, 'unavailable') || errorCode !== 0)) {
            stanza.attrs.type = attrs.type
        }

        if (tag === 'message' && WABinary_1.getBinaryNodeChild({
                tag,
                attrs,
                content
            }, 'unavailable')) {
            stanza.attrs.from = authState.creds.me.id
        }

        logger.debug({
            recv: {
                tag,
                attrs
            },
            sent: stanza.attrs
        }, 'sent ack')
        await sendNode(stanza)
    }

    const offerCall = async (toJid, isVideo = false) => {
        const callId = crypto_1.randomBytes(16).toString('hex').toUpperCase().substring(0, 64)
        const offerContent = []
        offerContent.push({
            tag: 'audio',
            attrs: {
                enc: 'opus',
                rate: '16000'
            },
            content: undefined
        })
        offerContent.push({
            tag: 'audio',
            attrs: {
                enc: 'opus',
                rate: '8000'
            },
            content: undefined
        })

        if (isVideo) {
            offerContent.push({
                tag: 'video',
                attrs: {
                    enc: 'vp8',
                    dec: 'vp8',
                    orientation: '0',
                    'screen_width': '1920',
                    'screen_height': '1080',
                    'device_orientation': '0'
                },
                content: undefined
            })
        }
        offerContent.push({
            tag: 'net',
            attrs: {
                medium: '3'
            },
            content: undefined
        })
        offerContent.push({
            tag: 'capability',
            attrs: {
                ver: '1'
            },
            content: new Uint8Array([1, 4, 255, 131, 207, 4])
        })
        offerContent.push({
            tag: 'encopt',
            attrs: {
                keygen: '2'
            },
            content: undefined
        })

        const encKey = crypto_1.randomBytes(32)
        const devices = (await getUSyncDevices([toJid], true, false)).map(({
            user,
            device
        }) => WABinary_1.jidEncode(user, 's.whatsapp.net', device))
        await assertSessions(devices, true)

        const {
            nodes: destinations,
            shouldIncludeDeviceIdentity
        } = await createParticipantNodes(devices, {
            call: {
                callKey: new Uint8Array(encKey)
            }
        }, {
            count: '0'
        })
        offerContent.push({
            tag: 'destination',
            attrs: {},
            content: destinations
        })

        if (shouldIncludeDeviceIdentity) {
            offerContent.push({
                tag: 'device-identity',
                attrs: {},
                content: Utils_1.encodeSignedDeviceIdentity(authState.creds.account, true)
            })
        }

        const stanza = ({
            tag: 'call',
            attrs: {
                id: Utils_1.generateMessageID(),
                to: toJid,
            },
            content: [{
                tag: 'offer',
                attrs: {
                    'call-id': callId,
                    'call-creator': authState.creds.me.id,
                },
                content: offerContent,
            }],
        })

        await query(stanza)

        return {
            id: callId,
            to: toJid
        }
    }

    const rejectCall = async (callId, callFrom) => {
        const stanza = ({
            tag: 'call',
            attrs: {
                from: authState.creds.me.id,
                to: callFrom,
            },
            content: [{
                tag: 'reject',
                attrs: {
                    'call-id': callId,
                    'call-creator': callFrom,
                    count: '0',
                },
                content: undefined,
            }],
        })

        await query(stanza)
    }

    const sendRetryRequest = async (node, forceIncludeKeys = false) => {
        const {
            fullMessage
        } = Utils_1.decodeMessageNode(node, authState.creds.me.id, authState.creds.me.lid || '')
        const {
            key: msgKey
        } = fullMessage
        const msgId = msgKey.id

        if (messageRetryManager) {
            // Check if we've exceeded max retries using the new system
            if (messageRetryManager.hasExceededMaxRetries(msgId)) {
                logger.debug({
                    msgId
                }, 'reached retry limit with new retry manager, clearing')
                messageRetryManager.markRetryFailed(msgId)
                return
            }

            // Increment retry count using new system
            const retryCount = messageRetryManager.incrementRetryCount(msgId)

            // Use the new retry count for the rest of the logic
            const key = `${msgId}:${msgKey?.participant}`
            msgRetryCache.set(key, retryCount)
        } else {
            // Fallback to old system
            const key = `${msgId}:${msgKey?.participant}`
            let retryCount = (await msgRetryCache.get(key)) || 0

            if (retryCount >= maxMsgRetryCount) {
                logger.debug({
                    retryCount,
                    msgId
                }, 'reached retry limit, clearing')
                msgRetryCache.del(key)
                return
            }

            retryCount += 1
            await msgRetryCache.set(key, retryCount)
        }

        const key = `${msgId}:${msgKey?.participant}`
        const retryCount = (await msgRetryCache.get(key)) || 1
        const {
            account,
            signedPreKey,
            signedIdentityKey: identityKey
        } = authState.creds
        const fromJid = node.attrs.from

        // Check if we should recreate the session
        let shouldRecreateSession = false
        let recreateReason = ''

        if (enableAutoSessionRecreation && messageRetryManager) {
            try {
                // Check if we have a session with this JID
                const sessionId = signalRepository.jidToSignalProtocolAddress(fromJid)
                const hasSession = await signalRepository.validateSession(fromJid)
                const result = messageRetryManager.shouldRecreateSession(fromJid, retryCount, hasSession.exists)

                shouldRecreateSession = result.recreate
                recreateReason = result.reason

                if (shouldRecreateSession) {
                    logger.info({
                        fromJid,
                        retryCount,
                        reason: recreateReason
                    }, 'recreating session for retry')
                    // Delete existing session to force recreation
                    await authState.keys.set({
                        session: {
                            [sessionId]: null
                        }
                    })
                    forceIncludeKeys = true
                }
            } catch (error) {
                logger.warn({
                    error,
                    fromJid
                }, 'failed to check session recreation')
            }
        }

        if (retryCount <= 2) {
            // Use new retry manager for phone requests if available
            if (messageRetryManager) {
                // Schedule phone request with delay (like whatsmeow)
                messageRetryManager.schedulePhoneRequest(msgId, async () => {
                    try {
                        const msgId = await requestPlaceholderResend(msgKey)
                        logger.debug(`sendRetryRequest: requested placeholder resend for message ${msgId} (scheduled)`)
                    } catch (error) {
                        logger.warn({
                            error,
                            msgId
                        }, 'failed to send scheduled phone request');
                    }
                })
            } else {
                // Fallback to immediate request
                const msgId = await requestPlaceholderResend(msgKey)
                logger.debug(`sendRetryRequest: requested placeholder resend for message ${msgId}`)
            }
        }

        const deviceIdentity = Utils_1.encodeSignedDeviceIdentity(account, true)
        await authState.keys.transaction(async () => {
            const receipt = {
                tag: 'receipt',
                attrs: {
                    id: msgId,
                    type: 'retry',
                    to: node.attrs.from
                },
                content: [{
                        tag: 'retry',
                        attrs: {
                            count: retryCount.toString(),
                            id: node.attrs.id,
                            t: node.attrs.t,
                            v: '1'
                        }
                    },
                    {
                        tag: 'registration',
                        attrs: {},
                        content: Utils_1.encodeBigEndian(authState.creds.registrationId)
                    }
                ]
            }

            if (node.attrs.recipient) {
                receipt.attrs.recipient = node.attrs.recipient
            }

            if (node.attrs.participant) {
                receipt.attrs.participant = node.attrs.participant
            }

            if (retryCount > 1 || forceIncludeKeys || shouldRecreateSession) {
                const {
                    update,
                    preKeys
                } = await Utils_1.getNextPreKeys(authState, 1)
                const [keyId] = Object.keys(preKeys)
                const key = preKeys[+keyId]
                const content = receipt.content

                content.push({
                    tag: 'keys',
                    attrs: {},
                    content: [{
                            tag: 'type',
                            attrs: {},
                            content: Buffer.from(Defaults_1.KEY_BUNDLE_TYPE)
                        },
                        {
                            tag: 'identity',
                            attrs: {},
                            content: identityKey.public
                        },
                        Utils_1.xmppPreKey(key, +keyId),
                        Utils_1.xmppSignedPreKey(signedPreKey),
                        {
                            tag: 'device-identity',
                            attrs: {},
                            content: deviceIdentity
                        }
                    ]
                });
                ev.emit('creds.update', update)
            }
            await sendNode(receipt)
            logger.info({
                msgAttrs: node.attrs,
                retryCount
            }, 'sent retry receipt')
        }, authState?.creds?.me?.id || 'sendRetryRequest')
    }

    const handleEncryptNotification = async (node) => {
        const from = node.attrs.from
        if (from === WABinary_1.S_WHATSAPP_NET) {
            const countChild = WABinary_1.getBinaryNodeChild(node, 'count')
            const count = +countChild.attrs.value
            const shouldUploadMorePreKeys = count < Defaults_1.MIN_PREKEY_COUNT
            logger.debug({
                count,
                shouldUploadMorePreKeys
            }, 'recv pre-key count')

            if (shouldUploadMorePreKeys) {
                await uploadPreKeys()
            }
        } else {
            const identityNode = WABinary_1.getBinaryNodeChild(node, 'identity')
            if (identityNode) {
                logger.info({
                    jid: from
                }, 'identity changed')
                // not handling right now
                // signal will override new identity anyway
            } else {
                logger.info({
                    node
                }, 'unknown encrypt notification')
            }
        }
    }

    const handleGroupNotification = (participant, child, msg, mode) => {
        let participantJid = mode === 'lid' ? WABinary_1.getBinaryNodeChild(child, 'participant')?.attrs?.phone_number : WABinary_1.getBinaryNodeChild(child, 'participant')?.attrs?.jid || participant

        // TODO: Add participant LID
        switch (child.tag) {
            case 'create':
                const metadata = groups_1.extractGroupMetadata(child)
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CREATE
                msg.messageStubParameters = [metadata.subject]
                msg.key = {
                    participant: metadata.owner
                }
                ev.emit('chats.upsert', [{
                    id: metadata.id,
                    name: metadata.subject,
                    conversationTimestamp: metadata.creation,
                }])
                ev.emit('groups.upsert', [{
                    ...metadata,
                    author: participant
                }])
                break
            case 'delete':
                msg.messageStubType = Types_1.WAMessageStubType.COMMUNITY_PARENT_GROUP_DELETED
                msg.messageStubParameters = [participantJid, 'delete']
                break
            case 'ephemeral':
            case 'not_ephemeral':
                msg.message = {
                    protocolMessage: {
                        type: WAProto_1.proto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING,
                        ephemeralExpiration: +(child.attrs.expiration || 0)
                    }
                }
                break
            case 'modify':
                const oldNumber = mode === 'lid' ? WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.phone_number) : WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.jid)
                msg.messageStubParameters = oldNumber || []
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_PARTICIPANT_CHANGE_NUMBER
                break
            case 'promote':
            case 'demote':
            case 'remove':
            case 'add':
            case 'leave':
                let stubType = `GROUP_PARTICIPANT_${child.tag.toUpperCase()}`
                if (child.attrs?.reason === 'linked_group_join') {
                    stubType = GROUP_PARTICIPANT_LINKED_GROUP_JOIN
                }
                msg.messageStubType = Types_1.WAMessageStubType[stubType]
                const participants = mode === 'lid' ? WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.phone_number) : WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.jid)
                if (participants.length === 1 &&
                    // if recv. "remove" message and sender removed themselves
                    // mark as left
                    WABinary_1.areJidsSameUser(participants[0], participant) &&
                    child.tag === 'remove') {
                    msg.messageStubType = Types_1.WAMessageStubType.GROUP_PARTICIPANT_LEAVE
                }
                msg.messageStubParameters = participants
                break
            case 'subject':
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_SUBJECT
                msg.messageStubParameters = [participantJid, child.attrs.subject]
                break
            case 'description':
                const description = WABinary_1.getBinaryNodeChild(child, 'body')?.content?.toString()
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_DESCRIPTION
                msg.messageStubParameters = description ? [description] : undefined
                break
            case 'announcement':
            case 'not_announcement':
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_ANNOUNCE
                msg.messageStubParameters = [(child.tag === 'announcement') ? 'on' : 'off']
                break
            case 'locked':
            case 'unlocked':
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_RESTRICT
                msg.messageStubParameters = [(child.tag === 'locked') ? 'on' : 'off']
                break
            case 'invite':
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_INVITE_LINK
                msg.messageStubParameters = [child.attrs.code]
                break
            case 'member_add_mode':
                const addMode = child.content
                if (addMode) {
                    msg.messageStubType = Types_1.WAMessageStubType.GROUP_MEMBER_ADD_MODE
                    msg.messageStubParameters = [addMode.toString()]
                }
                break
            case 'membership_approval_mode':
                const approvalMode = WABinary_1.getBinaryNodeChild(child, 'group_join')
                if (approvalMode) {
                    msg.messageStubType = Types_1.WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE
                    msg.messageStubParameters = [approvalMode.attrs.state]
                }
                break
            case 'created_membership_requests':
                participantJid = mode === 'lid' ? WABinary_1.getBinaryNodeChild(child, 'requested_user')?.attrs?.phone_number : WABinary_1.getBinaryNodeChild(child, 'requested_user')?.attrs?.jid || participant

                msg.messageStubType = Types_1.WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD
                msg.messageStubParameters = [participantJid, 'created', child.attrs.request_method]
                break
            case 'revoked_membership_requests':
                participantJid = mode === 'lid' ? WABinary_1.getBinaryNodeChild(child, 'requested_user')?.attrs?.phone_number : WABinary_1.getBinaryNodeChild(child, 'requested_user')?.attrs?.jid || participant

                const isDenied = WABinary_1.areJidsSameUser(participantJid, participant)
                msg.messageStubType = Types_1.WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD
                msg.messageStubParameters = [participantJid, isDenied ? 'revoked' : 'rejected']
                break
            case 'link':
            case 'unlink':
                const type = child.attrs?.unlink_type || child.attrs?.link_type
                const stubMap = {
                    parent_group: Types_1.WAMessageStubType[`COMMUNITY_${child.tag.toUpperCase()}_PARENT_GROUP`],
                    sibling_group: Types_1.WAMessageStubType[`COMMUNITY_${child.tag.toUpperCase()}_SIBLING_GROUP`],
                    sub_group: Types_1.WAMessageStubType[`COMMUNITY_${child.tag.toUpperCase()}_SUB_GROUP`]
                }
                const groups = WABinary_1.getBinaryNodeChildren(child, 'group')
                    .map(g => g.attrs?.jid || g.attrs?.subject || '')
                    .filter(x => x)
                msg.messageStubType = stubMap?.[type] || Types_1.WAMessageStubType[`COMMUNITY_${child.tag.toUpperCase()}_PARENT_GROUP`]
                msg.messageStubParameters = [participantJid, child.tag, groups]
                break
            case 'linked_group_promote':
            case 'linked_group_demote':
                const stubtype = `COMMUNITY_PARTICIPANT_${child.tag.split('_')[2].toUpperCase()}`
                const participantS = mode === 'lid' ? WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.phone_number) : WABinary_1.getBinaryNodeChildren(child, 'participant').map(p => p.attrs.jid)
                msg.messageStubType = Types_1.WAMessageStubType[stubtype]
                msg.messageStubParameters = participantS
                break
            case 'created_sub_group_suggestion':
                msg.messageStubType = Types_1.WAMessageStubType.SUGGESTED_SUBGROUP_ANNOUNCE
                msg.messageStubParameters = [participantJid, 'add']
                break
            case 'revoked_sub_group_suggestions':
                const res = WABinary_1.getBinaryNodeChildren(child, 'sub_group_suggestions')
                const reason = res.attrs?.reason
                if (reason === 'approved') msg.messageStubType = Types_1.WAMessageStubType.GROUP_CREATE
                else msg.messageStubType = Types_1.WAMessageStubType.GENERIC_NOTIFICATION
                msg.messageStubParameters = [participantJid, reason]
                break
            default:
                logger.warn(child.tag, 'Unhandled group node')
                break
        }
    }

    const handleNewsletterNotification = (id, node) => {
        const messages = WABinary_1.getBinaryNodeChild(node, 'messages')
        const message = WABinary_1.getBinaryNodeChild(node, 'message')
        const serverId = node.attrs.server_id

        const reactionsList = WABinary_1.getBinaryNodeChild(node, 'reactions')
        const viewsList = WABinary_1.getBinaryNodeChild(node, 'views_count')

        if (reactionsList) {
            const reactions = WABinary_1.getBinaryNodeChild(reactionsList, 'reaction')

            if (reactions.length === 0) {
                ev.emit('newsletter.reaction', {
                    id,
                    newsletter_server_id: serverId,
                    reaction: {
                        removed: true
                    }
                })
            }

            reactions.forEach(item => {
                ev.emit('newsletter.reaction', {
                    id,
                    newsletter_server_id: serverId,
                    reaction: {
                        code: item.attrs?.code,
                        count: +item.attrs.count
                    }
                })
            })
        }

        if (viewsList.length) {
            viewsList.forEach(item => {
                ev.emit('newsletter.view', {
                    id,
                    newsletter_server_id: serverId,
                    count: +item.attrs.count
                })
            })
        }
    }

    const handleMexNotification = (id, node) => {
        const operation = node?.attrs?.op_name
        const content = JSON.parse(node?.content)

        let contentPath
        let action

        if (operation === Types_1.MexOperations.UPDATE) {
            contentPath = content.data[Types_1.XWAPaths.METADATA_UPDATE]

            ev.emit('newsletter-settings.update', {
                id,
                update: contentPath.thread_metadata.settings
            })
        } else if (operation === Types_1.MexUpdatesOperations.GROUP_LIMIT_SHARING) {
            contentPath = content.data[Types_1.XWAPathsMexUpdates.GROUP_SHARING_CHANGE]

            ev.emit('limit-sharing.update', {
                id,
                author: contentPath.updated_by?.pn ? contentPath.updated_by.pn : contentPath.updated_by.id,
                action: `${contentPath.properties.limit_sharing.limit_sharing_enabled ? 'on' : 'off'}`,
                trigger: contentPath.properties.limit_sharing.limit_sharing_trigger,
                update_time: contentPath.update_time
            })
        } else if (operation === Types_1.MexUpdatesOperations.OWNER_COMMUNITY) {
            contentPath = content.data[Types_1.XWAPathsMexUpdates.COMMUNITY_OWNER_CHANGE]

            ev.emit('community-owner.update', {
                id,
                author: contentPath.updated_by?.pn ? contentPath.updated_by.pn : contentPath.updated_by.id,
                user: contentPath.role_updates[0].user?.pn ? contentPath.role_updates[0].user.pn : contentPath.role_updates[0].user.jid,
                new_role: contentPath.role_updates[0].new_role,
                update_time: contentPath.update_time
            })
        } else {

            if (operation === Types_1.MexOperations.PROMOTE) {
                action = 'promote'
                contentPath = content.data[Types_1.XWAPaths.PROMOTE]
            } else {
                action = 'demote'
                contentPath = content.data[Types_1.XWAPaths.DEMOTE]
            }

            ev.emit('newsletter-participants.update', {
                id,
                author: contentPath.actor.pn,
                user: contentPath.user.pn,
                new_role: contentPath.user_new_role,
                action
            })
        }
    }

    const processNotification = async (node) => {
        const result = {}
        const [child] = WABinary_1.getAllBinaryNodeChildren(node)
        const nodeType = node.attrs.type
        const from = WABinary_1.jidNormalizedUser(node.attrs.from)

        switch (nodeType) {
            case 'privacy_token':
                const tokenList = WABinary_1.getBinaryNodeChildren(child, 'token')
                for (const {
                        attrs,
                        content
                    }
                    of tokenList) {
                    const jid = attrs.jid
                    ev.emit('chats.update', [{
                        id: jid,
                        tcToken: content
                    }])
                    logger.debug({
                        jid
                    }, 'got privacy token update')
                }
                break
            case 'w:gp2':
                const mode = node.attrs.addressing_mode
                handleGroupNotification(mode === 'lid' ? node.attrs.participant_pn : node.attrs.participant, child, result, mode)
                break
            case 'newsletter':
                handleNewsletterNotification(node.attrs.from, child)
                break
            case 'mex':
                handleMexNotification(node.attrs.from, child)
                break
            case 'mediaretry':
                const event = Utils_1.decodeMediaRetryNode(node)
                ev.emit('messages.media-update', [event])
                break
            case 'encrypt':
                await handleEncryptNotification(node)
                break
            case 'devices':
                const devices = WABinary_1.getBinaryNodeChildren(child, 'device')
                if (WABinary_1.areJidsSameUser(child.attrs.jid, authState.creds.me.id) ||
                    WABinary_1.areJidsSameUser(child.attrs.lid, authState.creds.me.lid)) {
                    const deviceData = devices.map(d => ({
                        id: d.attrs.jid,
                        lid: d.attrs.lid
                    }))
                    logger.info({
                        deviceData
                    }, 'my own devices changed')
                }
                //TODO: drop a new event, add hashes
                break
            case 'server_sync':
                const update = WABinary_1.getBinaryNodeChild(node, 'collection')
                if (update) {
                    const name = update.attrs.name
                    await resyncAppState([name], false)
                }
                break
            case 'picture':
                const setPicture = WABinary_1.getBinaryNodeChild(node, 'set')
                const delPicture = WABinary_1.getBinaryNodeChild(node, 'delete')
                ev.emit('contacts.update', [{
                    id: WABinary_1.jidNormalizedUser(node?.attrs?.from) || (setPicture || delPicture)?.attrs?.hash || '',
                    imgUrl: setPicture ? 'changed' : 'removed'
                }])
                if (WABinary_1.isJidGroup(from)) {
                    const node = setPicture || delPicture
                    result.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_ICON
                    if (setPicture) {
                        result.messageStubParameters = [setPicture.attrs.id]
                    }
                    result.participant = node?.attrs?.author
                    result.key = {
                        ...result.key || {},
                        participant: setPicture?.attrs?.author
                    }
                }
                break
            case 'account_sync':
                if (child.tag === 'disappearing_mode') {
                    const newDuration = +child.attrs.duration
                    const timestamp = +child.attrs.t
                    logger.info({
                        newDuration
                    }, 'updated account disappearing mode')
                    ev.emit('creds.update', {
                        accountSettings: {
                            ...authState.creds.accountSettings,
                            defaultDisappearingMode: {
                                ephemeralExpiration: newDuration,
                                ephemeralSettingTimestamp: timestamp,
                            },
                        }
                    })
                } else if (child.tag === 'blocklist') {
                    const blocklists = WABinary_1.getBinaryNodeChildren(child, 'item')
                    for (const {
                            attrs
                        }
                        of blocklists) {
                        const blocklist = [attrs.jid]
                        const type = (attrs.action === 'block') ? 'add' : 'remove'
                        ev.emit('blocklist.update', {
                            blocklist,
                            type
                        })
                    }
                }
                break
            case 'link_code_companion_reg':
                const linkCodeCompanionReg = WABinary_1.getBinaryNodeChild(node, 'link_code_companion_reg')
                const ref = toRequiredBuffer(WABinary_1.getBinaryNodeChildBuffer(linkCodeCompanionReg, 'link_code_pairing_ref'))
                const primaryIdentityPublicKey = toRequiredBuffer(WABinary_1.getBinaryNodeChildBuffer(linkCodeCompanionReg, 'primary_identity_pub'))
                const primaryEphemeralPublicKeyWrapped = toRequiredBuffer(WABinary_1.getBinaryNodeChildBuffer(linkCodeCompanionReg, 'link_code_pairing_wrapped_primary_ephemeral_pub'))
                const codePairingPublicKey = await decipherLinkPublicKey(primaryEphemeralPublicKeyWrapped)
                const companionSharedKey = Utils_1.Curve.sharedKey(authState.creds.pairingEphemeralKeyPair.private, codePairingPublicKey)
                const random = crypto_1.randomBytes(32)
                const linkCodeSalt = crypto_1.randomBytes(32)

                const linkCodePairingExpanded = await Utils_1.hkdf(companionSharedKey, 32, {
                    salt: linkCodeSalt,
                    info: 'link_code_pairing_key_bundle_encryption_key'
                })

                const encryptPayload = Buffer.concat([Buffer.from(authState.creds.signedIdentityKey.public), primaryIdentityPublicKey, random])
                const encryptIv = crypto_1.randomBytes(12)
                const encrypted = Utils_1.aesEncryptGCM(encryptPayload, linkCodePairingExpanded, encryptIv, Buffer.alloc(0))
                const encryptedPayload = Buffer.concat([linkCodeSalt, encryptIv, encrypted])
                const identitySharedKey = Utils_1.Curve.sharedKey(authState.creds.signedIdentityKey.private, primaryIdentityPublicKey)
                const identityPayload = Buffer.concat([companionSharedKey, identitySharedKey, random])

                authState.creds.advSecretKey = (await Utils_1.hkdf(identityPayload, 32, {
                    info: 'adv_secret'
                })).toString('base64')

                await query({
                    tag: 'iq',
                    attrs: {
                        to: WABinary_1.S_WHATSAPP_NET,
                        type: 'set',
                        id: sock.generateMessageTag(),
                        xmlns: 'md'
                    },
                    content: [{
                        tag: 'link_code_companion_reg',
                        attrs: {
                            jid: authState.creds.me.id,
                            stage: 'companion_finish',
                        },
                        content: [{
                                tag: 'link_code_pairing_wrapped_key_bundle',
                                attrs: {},
                                content: encryptedPayload
                            },
                            {
                                tag: 'companion_identity_public',
                                attrs: {},
                                content: authState.creds.signedIdentityKey.public
                            },
                            {
                                tag: 'link_code_pairing_ref',
                                attrs: {},
                                content: ref
                            }
                        ]
                    }]
                })

                authState.creds.registered = true
                ev.emit('creds.update', authState.creds)
        }

        if (Object.keys(result).length) {
            return result
        }
    }

    async function decipherLinkPublicKey(data) {
        const buffer = toRequiredBuffer(data)
        const salt = buffer.slice(0, 32)
        const secretKey = await Utils_1.derivePairingCodeKey(authState.creds.pairingCode, salt)
        const iv = buffer.slice(32, 48)
        const payload = buffer.slice(48, 80)
        return Utils_1.aesDecryptCTR(payload, secretKey, iv)
    }

    function getTypeMessage(message) {
        const type = Object.keys(message)
        const restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) || (type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) || type[type.length - 1] || Object.keys(message)[0]
        return restype
    }

    function toRequiredBuffer(data) {
        if (data === undefined) {
            throw new boom_1.Boom('Invalid buffer', {
                statusCode: 400
            })
        }
        return data instanceof Buffer ? data : Buffer.from(data)
    }

    const willSendMessageAgain = async (id, participant) => {
        const key = `${id}:${participant}`
        const retryCount = (await msgRetryCache.get(key)) || 0
        return retryCount < maxMsgRetryCount
    }

    const updateSendMessageAgainCount = async (id, participant) => {
        const key = `${id}:${participant}`
        const newValue = ((await msgRetryCache.get(key)) || 0) + 1
        await msgRetryCache.set(key, newValue)
    }

    const sendMessagesAgain = async (key, ids, retryNode) => {
        const remoteJid = key.remoteJid
        const participant = key.participant || remoteJid
        const retryCount = +retryNode.attrs.count || 1

        // Try to get messages from cache first, then fallback to getMessage
        const msgs = []

        for (const id of ids) {
            let msg

            // Try to get from retry cache first if enabled
            if (messageRetryManager) {
                const cachedMsg = messageRetryManager.getRecentMessage(remoteJid, id)
                if (cachedMsg) {
                    msg = cachedMsg.message
                    logger.debug({
                        jid: remoteJid,
                        id
                    }, 'found message in retry cache')

                    // Mark retry as successful since we found the message
                    messageRetryManager.markRetrySuccess(id)
                }
            }

            // Fallback to getMessage if not found in cache
            if (!msg) {
                msg = await getMessage({
                    ...key,
                    id
                })
                if (msg) {
                    logger.debug({
                        jid: remoteJid,
                        id
                    }, 'found message via getMessage')

                    // Also mark as successful if found via getMessage
                    if (messageRetryManager) {
                        messageRetryManager.markRetrySuccess(id);
                    }
                }
            }
            msgs.push(msg)
        }

        // if it's the primary jid sending the request
        // just re-send the message to everyone
        // prevents the first message decryption failure
        const sendToAll = !WABinary_1.jidDecode(participant)?.device

        // Check if we should recreate session for this retry
        let shouldRecreateSession = false
        let recreateReason = ''

        if (enableAutoSessionRecreation && messageRetryManager) {
            try {
                const sessionId = signalRepository.jidToSignalProtocolAddress(participant)
                const hasSession = await signalRepository.validateSession(participant)
                const result = messageRetryManager.shouldRecreateSession(participant, retryCount, hasSession.exists)

                shouldRecreateSession = result.recreate
                recreateReason = result.reason

                if (shouldRecreateSession) {
                    logger.info({
                        participant,
                        retryCount,
                        reason: recreateReason
                    }, 'recreating session for outgoing retry')
                    await authState.keys.set({
                        session: {
                            [sessionId]: null
                        }
                    });
                }
            } catch (error) {
                logger.warn({
                    error,
                    participant
                }, 'failed to check session recreation for outgoing retry')
            }
        }

        await assertSessions([participant], shouldRecreateSession)

        if (WABinary_1.isJidGroup(remoteJid)) {
            await authState.keys.set({
                'sender-key-memory': {
                    [remoteJid]: null
                }
            });
        }
        logger.debug({
            participant,
            sendToAll,
            shouldRecreateSession,
            recreateReason
        }, 'forced new session for retry recp')

        for (const [i, msg] of msgs.entries()) {
            if (!ids[i])
                continue

            if (msg && (await willSendMessageAgain(ids[i], participant))) {
                updateSendMessageAgainCount(ids[i], participant)
                const msgRelayOpts = {
                    messageId: ids[i]
                }

                if (sendToAll) {
                    msgRelayOpts.useUserDevicesCache = false
                } else {
                    msgRelayOpts.participant = {
                        jid: participant,
                        count: +retryNode.attrs.count
                    }
                }
                await relayMessage(key.remoteJid, msg, msgRelayOpts)
            } else {
                logger.debug({
                    jid: key.remoteJid,
                    id: ids[i]
                }, 'recv retry request, but message not available')
            }
        }
    }

    const handleReceipt = async (node) => {
        const {
            attrs,
            content
        } = node
        const isLid = attrs.from.includes('lid')
        const isNodeFromMe = WABinary_1.areJidsSameUser(attrs.participant || attrs.from, isLid ? authState.creds.me?.lid : authState.creds.me?.id)
        const remoteJid = !isNodeFromMe || WABinary_1.isJidGroup(attrs.from) ? attrs.from : attrs.recipient
        const fromMe = !attrs.recipient || ((attrs.type === 'retry' || attrs.type === 'sender') && isNodeFromMe)

        const key = {
            remoteJid,
            id: '',
            fromMe,
            participant: attrs.participant
        }

        if (shouldIgnoreJid(remoteJid) && remoteJid !== '@s.whatsapp.net') {
            logger.debug({
                remoteJid
            }, 'ignoring receipt from jid')
            await sendMessageAck(node)
            return
        }

        const ids = [attrs.id]
        if (Array.isArray(content)) {
            const items = WABinary_1.getBinaryNodeChildren(content[0], 'item')
            ids.push(...items.map(i => i.attrs.id))
        }

        try {
            await Promise.all([
                processingMutex.mutex(async () => {
                    const status = Utils_1.getStatusFromReceiptType(attrs.type)

                    if (typeof status !== 'undefined' && (
                            // basically, we only want to know when a message from us has been delivered to/read by the other person
                            // or another device of ours has read some messages
                            status >= WAProto_1.proto.WebMessageInfo.Status.SERVER_ACK ||
                            !isNodeFromMe)) {
                        if (WABinary_1.isJidGroup(remoteJid) || WABinary_1.isJidStatusBroadcast(remoteJid)) {
                            if (attrs.participant) {
                                const updateKey = status === WAProto_1.proto.WebMessageInfo.Status.DELIVERY_ACK ? 'receiptTimestamp' : 'readTimestamp'
                                ev.emit('message-receipt.update', ids.map(id => ({
                                    key: {
                                        ...key,
                                        id
                                    },
                                    receipt: {
                                        userJid: WABinary_1.jidNormalizedUser(attrs.participant),
                                        [updateKey]: +attrs.t
                                    }
                                })))
                            }
                        } else {
                            ev.emit('messages.update', ids.map(id => ({
                                key: {
                                    ...key,
                                    id
                                },
                                update: {
                                    status
                                }
                            })))
                        }
                    }

                    if (attrs.type === 'retry') {
                        // correctly set who is asking for the retry
                        key.participant = key.participant || attrs.from
                        const retryNode = WABinary_1.getBinaryNodeChild(node, 'retry')

                        if (ids[0] && key.participant && (await willSendMessageAgain(ids[0], key.participant))) {
                            if (key.fromMe) {
                                try {
                                    updateSendMessageAgainCount(ids[0], key.participant)
                                    logger.debug({
                                        attrs,
                                        key
                                    }, 'recv retry request')
                                    await sendMessagesAgain(key, ids, retryNode)
                                } catch (error) {
                                    logger.error({
                                        key,
                                        ids,
                                        trace: error instanceof Error ? error.stack : 'Unknown error'
                                    }, 'error in sending message again')
                                }
                            } else {
                                logger.info({
                                    attrs,
                                    key
                                }, 'recv retry for not fromMe message')
                            }
                        } else {
                            logger.info({
                                attrs,
                                key
                            }, 'will not send message again, as sent too many times')
                        }
                    }
                })
            ])
        } finally {
            await sendMessageAck(node)
        }
    }

    const handleNotification = async (node) => {
        const remoteJid = node.attrs.from

        if (shouldIgnoreJid(remoteJid) && remoteJid !== '@s.whatsapp.net') {
            logger.debug({
                remoteJid,
                id: node.attrs.id
            }, 'ignored notification')
            await sendMessageAck(node)
            return
        }

        try {
            await Promise.all([
                processingMutex.mutex(async () => {
                    const msg = await processNotification(node)

                    if (msg) {
                        const fromMe = WABinary_1.areJidsSameUser(node.attrs.participant || remoteJid, authState.creds.me.id)
                        msg.key = {
                            remoteJid,
                            fromMe,
                            participant: node.attrs.participant,
                            id: node.attrs.id,
                            ...(msg.key || {})
                        }
                        msg.participant = msg.participant ? msg.participant : node.attrs.participant
                        msg.messageTimestamp = +node.attrs.t
                        const fullMsg = WAProto_1.proto.WebMessageInfo.fromObject(msg)
                        await upsertMessage(fullMsg, 'append')
                    }
                })
            ])
        } finally {
            await sendMessageAck(node)
        }
    }

    const handleMessage = async (node) => {
        if (shouldIgnoreJid(node.attrs.from) && node.attrs.from !== '@s.whatsapp.net') {
            logger.debug({
                key: node.attrs.key
            }, 'ignored message')
            await sendMessageAck(node)
            return
        }

        let response

        const encNode = WABinary_1.getBinaryNodeChild(node, 'enc')
        if (encNode && encNode.attrs.type === 'msmsg') {
            logger.debug({
                key: node.attrs.key
            }, 'ignored msmsg')
            await sendMessageAck(node, Utils_1.NACK_REASONS.MissingMessageSecret)
            return
        }

        if (WABinary_1.getBinaryNodeChild(node, 'unavailable') && !encNode) {
            await sendMessageAck(node)
            const { key } = Utils_1.decodeMessageNode(node, authState.creds.me.id, authState.creds.me.lid || '').fullMessage
            response = await requestPlaceholderResend(key);
            if (response === 'RESOLVED') {
                return
            }
            logger.debug('received unavailable message, acked and requested resend from phone');
        } else {
            if (placeholderResendCache.get(node.attrs.id)) {
                await placeholderResendCache.del(node.attrs.id)
            }
        }

        const {
            fullMessage: msg,
            category,
            author,
            decrypt
        } = Utils_1.decryptMessageNode(node, authState.creds.me.id, authState.creds.me.lid || '', signalRepository, logger)
        if (response && msg?.messageStubParameters?.[0] === Utils_1.NO_MESSAGE_FOUND_ERROR_TEXT) {
            msg.messageStubParameters = [Utils_1.NO_MESSAGE_FOUND_ERROR_TEXT, response]
        }

        if (msg.message?.protocolMessage?.type === WAProto_1.proto.Message.ProtocolMessage.Type.SHARE_PHONE_NUMBER && node.attrs.sender_pn) {
            const lid = WABinary_1.jidNormalizedUser(node.attrs.from), pn = WABinary_1.jidNormalizedUser(node.attrs.sender_pn)
            ev.emit('lid-mapping.update', {
                lid,
                pn
            })
            await signalRepository.lidMapping.storeLIDPNMappings([{
                lid,
                pn
            }])
        }

        if (msg.key?.remoteJid && msg.key?.id && messageRetryManager) {
            messageRetryManager.addRecentMessage(msg.key.remoteJid, msg.key.id, msg.message)
            logger.debug({
                jid: msg.key.remoteJid,
                id: msg.key.id
            }, 'Added message to recent cache for retry receipts')
        }

        try {
            await Promise.all([
                processingMutex.mutex(async () => {
                    await decrypt()
                    if (msg.messageStubType === WAProto_1.proto.WebMessageInfo.StubType.CIPHERTEXT) {
                        if (msg?.messageStubParameters?.[0] === Utils_1.MISSING_KEYS_ERROR_TEXT) {
                            return sendMessageAck(node, Utils_1.NACK_REASONS.ParsingError)
                        }

                        const errorMessage = msg?.messageStubParameters?.[0] || ''
                        const isPreKeyError = errorMessage.includes('PreKey')
                        logger.debug(`[handleMessage] Attempting retry request for failed decryption`)

                        retryMutex.mutex(async () => {
                            try {
                                if (!ws.isOpen) {
                                    logger.debug({
                                        node
                                    }, 'Connection closed, skipping retry')
                                    return
                                }

                                if (WABinary_1.getBinaryNodeChild(node, 'unavailable')) {
                                    logger.debug('Message unavailable, skipping retry')
                                    return
                                }

                                if (isPreKeyError) {
                                    logger.info({
                                        error: errorMessage
                                    }, 'PreKey error detected, uploading and retrying')
                                    try {
                                        logger.debug('Uploading pre-keys for error recovery')
                                        await uploadPreKeys(5)
                                        logger.debug('Waiting for server to process new pre-keys')
                                        await Utils_1.delay(1000)
                                    } catch (uploadErr) {
                                        logger.error({
                                            uploadErr
                                        }, 'Pre-key upload failed, proceeding with retry anyway')
                                    }
                                }

                                const encNode = WABinary_1.getBinaryNodeChild(node, 'enc')
                                await sendRetryRequest(node, !encNode)
                                if (retryRequestDelayMs) {
                                    await Utils_1.delay(retryRequestDelayMs)
                                }
                            } catch (err) {
                                logger.error({
                                    err,
                                    isPreKeyError
                                }, 'Failed to handle retry, attempting basic retry')
                                try {
                                    const encNode = WABinary_1.getBinaryNodeChild(node, 'enc')
                                    await sendRetryRequest(node, !encNode)
                                } catch (retryErr) {
                                    logger.error({
                                        retryErr
                                    }, 'Failed to send retry after error handling')
                                }
                            }
                        })
                    } else {
                        let type = undefined
                        if (msg.key.participant && msg.key.participant.endsWith('@lid')) {
                            msg.key.participant = node.attrs.participant_pn || authState.creds.me.id;
                        }
                        if (WABinary_1.isJidGroup(msg.key.remoteJid)) {
                            const mtype = getTypeMessage(msg.message)
                            const message = msg.message?.[mtype]
                            const contextInfo = message?.contextInfo
                            const participant = contextInfo?.participant
                            const mentionedJid = contextInfo?.mentionedJid
                            if (typeof participant === "string" && participant.endsWith('@lid')) {
                                if (msg.message?.[mtype]?.contextInfo) {
                                    const metadata = await global.groupMetadataCache(msg.key.remoteJid)
                                    const sender_lid = msg.message[mtype].contextInfo.participant
                                    const found = metadata.participants.find(p => p.lid === sender_lid)
                                    if (found) {
                                        msg.message[mtype].contextInfo.participant = found.id
                                    } else {
                                        const lid = WABinary_1.jidNormalizedUser(sender_lid)
                                        const sender_jid = await signalRepository.lidMapping.getPNForLID(sender_lid)
                                        if (sender_jid) {
                                            const pn = WABinary_1.jidNormalizedUser(sender_jid)
                                            await signalRepository.lidMapping.storeLIDPNMappings([{ lid, pn }])
                                            msg.message[mtype].contextInfo.participant = pn
                                        }
                                    }
                                }
                            }
                            if (Array.isArray(mentionedJid) && mentionedJid.length > 0) {
                                if (msg.message?.[mtype]?.contextInfo) {
                                    const metadata = await global.groupMetadataCache(msg.key.remoteJid)
                                    const updatedMentionedJid = []
                                    let needsUpdate = false
                                    for (const mentionedLid of mentionedJid) {
                                        if (typeof mentionedLid === "string" && mentionedLid.endsWith('@lid')) {
                                            const found = metadata.participants.find(p => p.lid === mentionedLid)
                                            if (found) {
                                                updatedMentionedJid.push(found.id)
                                                if (msg.message[mtype]?.text) {
                                                    msg.message[mtype].text = msg.message[mtype].text.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${found.id.split("@")[0]}`);
                                                } else if (msg.message[mtype]?.caption) {
                                                    msg.message[mtype].caption = msg.message[mtype].caption.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${found.id.split("@")[0]}`);
                                                }
                                            } else {
                                                const lid = WABinary_1.jidNormalizedUser(mentionedLid)
                                                const mentioned_jid = await signalRepository.lidMapping.getPNForLID(mentionedLid)
                                                if (mentioned_jid) {
                                                    const pn = WABinary_1.jidNormalizedUser(mentioned_jid)
                                                    await signalRepository.lidMapping.storeLIDPNMappings([{ lid, pn }])
                                                    updatedMentionedJid.push(pn)
                                                    if (msg.message[mtype]?.text) {
                                                        msg.message[mtype].text = msg.message[mtype].text.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${pn.split("@")[0]}`);
                                                    } else if (msg.message[mtype]?.caption) {
                                                        msg.message[mtype].caption = msg.message[mtype].caption.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${pn.split("@")[0]}`);
                                                    }
                                                } else {
                                                    updatedMentionedJid.push(mentionedLid)
                                                }
                                            }
                                            needsUpdate = true
                                        } else {
                                            updatedMentionedJid.push(mentionedLid)
                                        }
                                    }
                                    if (needsUpdate) {
                                        msg.message[mtype].contextInfo.mentionedJid = updatedMentionedJid
                                    }
                                }
                            }
                        }
                        if (!WABinary_1.isJidGroup(msg.key.remoteJid) && WABinary_1.isLidUser(msg.key.remoteJid)) {
                            msg.key.remoteJid = node.attrs.sender_pn || node.attrs.peer_recipient_pn;
                        }
                        let participant = msg.key.participant
                        if (category === 'peer') {
                            type = 'peer_msg'
                        } else if (msg.key.fromMe) {
                            type = 'sender'
                            if (WABinary_1.isLidUser(msg.key.remoteJid) || WABinary_1.isLidUser(msg.key.participant_lid)) {
                                participant = author
                            }
                        } else if (!sendActiveReceipts) {
                            type = 'inactive'
                        }
                        await sendReceipt(msg.key.remoteJid, participant, [msg.key.id], type)

                        const isAnyHistoryMsg = Utils_1.getHistoryMsg(msg.message)
                        if (isAnyHistoryMsg) {
                            const jid = WABinary_1.jidNormalizedUser(msg.key.remoteJid)
                            await sendReceipt(jid, undefined, [msg.key.id], 'hist_sync')
                        }
                    }
                    Utils_1.cleanMessage(msg, authState.creds.me.id)
                    await sendMessageAck(node)
                    await upsertMessage(msg, node.attrs.offline ? 'append' : 'notify')
                })
            ])
        } catch (error) {
            logger.error({
                error,
                node
            }, 'error in handling message')
        }
    }

    const fetchMessageHistory = async (count, oldestMsgKey, oldestMsgTimestamp) => {
        if (!authState.creds.me?.id) {
            throw new boom_1.Boom('Not authenticated')
        }

        const pdoMessage = {
            historySyncOnDemandRequest: {
                chatJid: oldestMsgKey.remoteJid,
                oldestMsgFromMe: oldestMsgKey.fromMe,
                oldestMsgId: oldestMsgKey.id,
                oldestMsgTimestampMs: oldestMsgTimestamp,
                onDemandMsgCount: count
            },
            peerDataOperationRequestType: WAProto_1.proto.Message.PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND
        }

        return sendPeerDataOperationMessage(pdoMessage)
    }

    const requestPlaceholderResend = async (messageKey) => {
        if (!authState.creds.me?.id) {
            throw new boom_1.Boom('Not authenticated')
        }

        if (placeholderResendCache.get(messageKey?.id)) {
            logger.debug({
                messageKey
            }, 'already requested resend')
            return
        } else {
            placeholderResendCache.set(messageKey?.id, true)
        }

        await Utils_1.delay(5000)

        if (!placeholderResendCache.get(messageKey?.id)) {
            logger.debug({
                messageKey
            }, 'message received while resend requested')
            return 'RESOLVED'
        }

        const pdoMessage = {
            placeholderMessageResendRequest: [{
                messageKey
            }],
            peerDataOperationRequestType: WAProto_1.proto.Message.PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND
        }

        setTimeout(() => {
            if (placeholderResendCache.get(messageKey?.id)) {
                logger.debug({
                    messageKey
                }, 'PDO message without response after 15 seconds. Phone possibly offline')
                placeholderResendCache.del(messageKey?.id)
            }
        }, 15000)

        return sendPeerDataOperationMessage(pdoMessage)
    }

    const handleCall = async (node) => {
        let status

        const {
            attrs
        } = node
        const [infoChild] = WABinary_1.getAllBinaryNodeChildren(node)
        const callId = infoChild.attrs['call-id']
        const from = infoChild.attrs.from || infoChild.attrs['call-creator']
        status = Utils_1.getCallStatusFromNode(infoChild)

        if (WABinary_1.isLidUser(from) && infoChild.tag === 'relaylatency') {
            const verify = await callOfferCache.get(callId)

            if (!verify) {
                status = 'offer'

                const callLid = {
                    chatId: attrs.from,
                    from,
                    id: callId,
                    date: new Date(+attrs.t * 1000),
                    offline: !!attrs.offline,
                    status
                }
                await callOfferCache.set(callId, callLid)
            }
        }

        const call = {
            chatId: attrs.from,
            from,
            id: callId,
            date: new Date(+attrs.t * 1000),
            offline: !!attrs.offline,
            status,
        }

        if (status === 'offer') {
            call.isVideo = !!WABinary_1.getBinaryNodeChild(infoChild, 'video')
            call.isGroup = infoChild.attrs.type === 'group' || !!infoChild.attrs['group-jid']
            call.groupJid = infoChild.attrs['group-jid']
            await callOfferCache.set(call.id, call)
        }

        const existingCall = await callOfferCache.get(call.id)

        // use existing call info to populate this event
        if (existingCall) {
            call.isVideo = existingCall.isVideo
            call.isGroup = existingCall.isGroup
        }

        // delete data once call has ended
        if (status === 'reject' || status === 'accept' || status === 'timeout' || status === 'terminate') {
            await callOfferCache.del(call.id)
        }

        ev.emit('call', [call])

        await sendMessageAck(node)
    }

    const handleBadAck = async ({
        attrs
    }) => {
        const key = {
            remoteJid: attrs.from,
            fromMe: true,
            id: attrs.id,
            newsletter_server_id: attrs?.server_id
        }
        // WARNING: REFRAIN FROM ENABLING THIS FOR NOW. IT WILL CAUSE A LOOP
        // // current hypothesis is that if pash is sent in the ack
        // // it means -- the message hasn't reached all devices yet
        // // we'll retry sending the message here
        // if(attrs.phash) {
        // 	logger.info({ attrs }, 'received phash in ack, resending message...')
        // 	const msg = await getMessage(key)
        // 	if(msg) {
        // 		await relayMessage(key.remoteJid!, msg, { messageId: key.id!, useUserDevicesCache: false })
        // 	} else {
        // 		logger.warn({ attrs }, 'could not send message again, as it was not found')
        // 	}
        // }
        // error in acknowledgement,
        // device could not display the message
        if (attrs.error) {
            logger.warn({
                attrs
            }, 'received error in ack')
            ev.emit('messages.update', [{
                key,
                update: {
                    status: Types_1.WAMessageStatus.ERROR,
                    messageStubParameters: [
                        attrs.error
                    ]
                }
            }])
        }
    }

    /// processes a node with the given function
    /// and adds the task to the existing buffer if we're buffering events
    const processNodeWithBuffer = async (node, identifier, exec) => {
        ev.buffer()
        await execTask()
        ev.flush()

        function execTask() {
            return exec(node, false)
                .catch(err => onUnexpectedError(err, identifier))
        }
    }

    const makeOfflineNodeProcessor = () => {
        const nodeProcessorMap = new Map([
            ['message', handleMessage],
            ['call', handleCall],
            ['receipt', handleReceipt],
            ['notification', handleNotification]
        ])

        const nodes = []
        let isProcessing = false

        const enqueue = (type, node) => {
            nodes.push({
                type,
                node
            })

            if (isProcessing) {
                return
            }

            isProcessing = true

            const promise = async () => {
                while (nodes.length && ws.isOpen) {
                    const {
                        type,
                        node
                    } = nodes.shift()
                    const nodeProcessor = nodeProcessorMap.get(type)
                    if (!nodeProcessor) {
                        onUnexpectedError(new Error(`unknown offline node type: ${type}`), 'processing offline node')
                        continue
                    }
                    await nodeProcessor(node)
                }
                isProcessing = false
            }
            promise().catch(error => onUnexpectedError(error, 'processing offline nodes'))
        }

        return {
            enqueue
        }
    }

    const offlineNodeProcessor = makeOfflineNodeProcessor()

    const processNode = (type, node, identifier, exec) => {
        const isOffline = !!node.attrs.offline

        if (isOffline) {
            offlineNodeProcessor.enqueue(type, node)
        } else {
            processNodeWithBuffer(node, identifier, exec)
        }
    }

    // recv a message
    ws.on('CB:message', (node) => {
        processNode('message', node, 'processing message', handleMessage)
    })
    ws.on('CB:call', async (node) => {
        processNode('call', node, 'handling call', handleCall)
    })
    ws.on('CB:receipt', node => {
        processNode('receipt', node, 'handling receipt', handleReceipt)
    })
    ws.on('CB:notification', async (node) => {
        processNode('notification', node, 'handling notification', handleNotification)
    })
    ws.on('CB:ack,class:message', (node) => {
        handleBadAck(node)
            .catch(error => onUnexpectedError(error, 'handling bad ack'))
    })
    ev.on('call', ([call]) => {
        // missed call + group call notification message generation
        if (call.status === 'timeout' || (call.status === 'offer' && call.isGroup)) {
            const msg = {
                key: {
                    remoteJid: call.chatId,
                    id: call.id,
                    fromMe: false
                },
                messageTimestamp: Utils_1.unixTimestampSeconds(call.date),
            }

            if (call.status === 'timeout') {
                if (call.isGroup) {
                    msg.messageStubType = call.isVideo ? Types_1.WAMessageStubType.CALL_MISSED_GROUP_VIDEO : Types_1.WAMessageStubType.CALL_MISSED_GROUP_VOICE
                } else {
                    msg.messageStubType = call.isVideo ? Types_1.WAMessageStubType.CALL_MISSED_VIDEO : Types_1.WAMessageStubType.CALL_MISSED_VOICE
                }
            } else {
                msg.message = {
                    call: {
                        callKey: Buffer.from(call.id)
                    }
                }
            }

            const protoMsg = WAProto_1.proto.WebMessageInfo.fromObject(msg)
            upsertMessage(protoMsg, call.offline ? 'append' : 'notify')
        }
    })

    ev.on('connection.update', ({
        isOnline
    }) => {
        if (typeof isOnline !== 'undefined') {
            sendActiveReceipts = isOnline
            logger.trace(`sendActiveReceipts set to "${sendActiveReceipts}"`)
        }
    })

    return {
        ...sock,
        sendMessageAck,
        sendRetryRequest,
        offerCall,
        rejectCall,
        fetchMessageHistory,
        requestPlaceholderResend,
        messageRetryManager
    }
}

module.exports = {
    makeMessagesRecvSocket
}