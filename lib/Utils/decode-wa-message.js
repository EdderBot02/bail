"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const boom_1 = require("@hapi/boom")
const WAProto_1 = require("../../WAProto")
const WABinary_1 = require("../WABinary")
const generics_1 = require("./generics")
const messages_1 = require("./messages") 

const NO_MESSAGE_FOUND_ERROR_TEXT = 'Message absent from node'

const MISSING_KEYS_ERROR_TEXT = 'Key used already or never filled'

const DECRYPTION_RETRY_CONFIG = {
    maxRetries: 3,
    baseDelayMs: 100,
    sessionRecordErrors: ['No session record', 'SessionError: No session record']
}

const NACK_REASONS = {
    ParsingError: 487,
    UnrecognizedStanza: 488,
    UnrecognizedStanzaClass: 489,
    UnrecognizedStanzaType: 490,
    InvalidProtobuf: 491,
    InvalidHostedCompanionStanza: 493,
    MissingMessageSecret: 495,
    SignalErrorOldCounter: 496,
    MessageDeletedOnPeer: 499,
    UnhandledError: 500,
    UnsupportedAdminRevoke: 550,
    UnsupportedLIDGroup: 551,
    DBOperationFailed: 552
}

function getTypeMessage(message) {
    const type = Object.keys(message)
    const restype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) || (type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) || type[type.length - 1] || Object.keys(message)[0]
    return restype
}

const extractAddressingContext = (stanza) => {
    let senderAlt
    let recipientAlt
    
    const sender = stanza.attrs.participant || stanza.attrs.from
    const addressingMode = stanza.attrs.addressing_mode || (sender?.endsWith('lid') ? 'lid' : 'pn')
    
    if (WABinary_1.isLidUser(sender)) {
        senderAlt = stanza.attrs.participant_pn || stanza.attrs.sender_pn || stanza.attrs.peer_recipient_pn
        recipientAlt = stanza.attrs.recipient_pn
        if (sender && senderAlt) senderAlt = WABinary_1.transferDevice(sender, senderAlt)
    } else if (WABinary_1.isJidUser(sender)) {
        senderAlt = stanza.attrs.participant_lid || stanza.attrs.sender_lid || stanza.attrs.peer_recipient_lid
        recipientAlt = stanza.attrs.recipient_lid
        if (sender && senderAlt) senderAlt = WABinary_1.transferDevice(sender, senderAlt)
    }
    return {
        addressingMode,
        senderAlt,
        recipientAlt
    }
}

const getDecryptionJid = async (sender, repository) => {
    if (!sender.includes('@s.whatsapp.net')) {
        return sender
    }
    return (await repository.lidMapping.getLIDForPN(sender))
}

const storeMappingFromEnvelope = async (stanza, sender, decryptionJid, repository, logger) => {
    const { senderAlt } = extractAddressingContext(stanza)
    if (senderAlt && WABinary_1.isLidUser(senderAlt) && WABinary_1.isJidUser(sender) && decryptionJid === sender) {
        try {
            await repository.lidMapping.storeLIDPNMappings([{ lid: senderAlt, pn: sender }])
            logger.debug({ sender, senderAlt }, 'Stored LID mapping from envelope')
        } catch (error) {
            logger.warn({ sender, senderAlt, error }, 'Failed to store LID mapping')
        }
    }
}

function decodeMessageNode(stanza, meId, meLid) {
    let msg_type
    let chat_id
    let author
    const msgId = stanza.attrs.id
    const from = stanza.attrs.from
    const participant = stanza.attrs.addressing_mode === "lid" ? stanza.attrs.participant_pn : stanza.attrs.addressing_mode === "pn" ? stanza.attrs.participant : from;
    const participant_lid = stanza.attrs.addressing_mode === "lid" ? stanza.attrs.participant : stanza.attrs.addressing_mode === "pn" ? stanza.attrs.participant_lid : stanza.attrs.sender_lid;
    const recipient = stanza.attrs.recipient
    const isMe = (jid) => WABinary_1.areJidsSameUser(jid, meId)
    const isMeLid = (jid) => WABinary_1.areJidsSameUser(jid, meLid)
    if (WABinary_1.isJidUser(from)) {
        if (recipient) {
            if (!isMe(from)) {
                throw new boom_1.Boom('receipient present, but msg not from me', { data: stanza })
            }
            chat_id = recipient
        }
        else {
            chat_id = from
        }
        msg_type = 'chat'
        author = from
    } else if (WABinary_1.isLidUser(from)) {
        if (recipient) {
            if (!isMeLid(from)) {
                throw new boom_1.Boom('receipient present, but msg not from me', { data: stanza })
            }
            chat_id = recipient
        }
        else {
            chat_id = from
        }
        msg_type = 'chat'
        author = from
    } else if (WABinary_1.isJidGroup(from)) {
        if (!participant) {
            throw new boom_1.Boom('No participant in group message')
        }
        msg_type = 'group'
        author = participant
        chat_id = from
    } else if (WABinary_1.isJidBroadcast(from)) {
        if (!participant) {
            throw new boom_1.Boom('No participant in group message')
        }
        const isParticipantMe = isMe(participant)
        if (WABinary_1.isJidStatusBroadcast(from)) {
            msg_type = isParticipantMe ? 'direct_peer_status' : 'other_status'
        }
        else {
            msg_type = isParticipantMe ? 'peer_broadcast' : 'other_broadcast'
        }
        chat_id = from
        author = participant
    } else if (WABinary_1.isJidNewsletter(from)) {
        msg_type = 'newsletter'
        chat_id = from
        author = from
    } else {
        throw new boom_1.Boom('Unknown message type', { data: stanza })
    }
    const fromMe = WABinary_1.isJidNewsletter(from) ? !!stanza.attrs?.is_sender : WABinary_1.isLidUser(from) ? isMeLid(participant || stanza.attrs.from) : isMe(participant || stanza.attrs.from)
    const pushname = stanza?.attrs?.notify
    const key = {
        remoteJid: chat_id,
        fromMe,
        id: msgId,
        participant: WABinary_1.jidNormalizedUser(participant),
        participant_lid: WABinary_1.jidNormalizedUser(participant_lid),
    }
    const fullMessage = {
        key,
        messageTimestamp: +stanza.attrs.t,
        pushName: pushname,
        broadcast: WABinary_1.isJidBroadcast(from), 
        newsletter: WABinary_1.isJidNewsletter(from) 
    }
    if (msg_type === 'newsletter') {
        fullMessage.newsletter_server_id  = +stanza.attrs?.server_id
    }
    if (key.fromMe) {
        fullMessage.status = WAProto_1.proto.WebMessageInfo.Status.SERVER_ACK
    }
    if (!key.fromMe) {
        fullMessage.platform = messages_1.getDevice(key.id) 
    }
    return {
        fullMessage,
        author,
        sender: msg_type === 'chat' ? author : chat_id
    }
}

const decryptMessageNode = (stanza, meId, meLid, repository, logger) => {
    const { fullMessage, author, sender } = decodeMessageNode(stanza, meId, meLid)
    return {
        fullMessage,
        category: stanza.attrs.category,
        author,
        async decrypt() {
            let decryptables = 0
            if (Array.isArray(stanza.content)) {
                for (const { tag, attrs, content } of stanza.content) {
                    if (tag === 'verified_name' && content instanceof Uint8Array) {
                        const cert = WAProto_1.proto.VerifiedNameCertificate.decode(content)
                        const details = WAProto_1.proto.VerifiedNameCertificate.Details.decode(cert.details)
                        fullMessage.verifiedBizName = details.verifiedName
                    }
                    if (tag === 'unavailable' && attrs.type === 'view_once') {
                        fullMessage.key.isViewOnce = true; // TODO: remove from here and add a STUB TYPE
                    }
                    if (tag !== 'enc' && tag !== 'plaintext') {
                        continue
                    }
                    if (!(content instanceof Uint8Array)) {
                        continue
                    }
                    decryptables += 1
                    let msgBuffer
                    const user = WABinary_1.isJidUser(sender) ? sender : author // TODO: flaky logic
                    const decryptionJid = await getDecryptionJid(user, repository)
                    
                    if (tag !== 'plaintext') {
                        await storeMappingFromEnvelope(stanza, user, decryptionJid, repository, logger)
                    }
                    try {
                        const e2eType = tag === 'plaintext' ? 'plaintext' : attrs.type
                        switch (e2eType) {
                            case 'skmsg':
                                msgBuffer = await repository.decryptGroupMessage({
                                    group: sender,
                                    authorJid: author,
                                    msg: content
                                })
                                break
                            case 'pkmsg':
                            case 'msg':
                                msgBuffer = await repository.decryptMessage({
                                    jid: decryptionJid,
                                    type: e2eType,
                                    ciphertext: content
                                })
                                break
                            case 'plaintext':
                                msgBuffer = content
                                break
                            default:
                                throw new Error(`Unknown e2e type: ${e2eType}`)
                        }
                        let msg = WAProto_1.proto.Message.decode(e2eType !== 'plaintext' ? generics_1.unpadRandomMax16(msgBuffer) : msgBuffer)
                        msg = msg.deviceSentMessage?.message || msg
                        if (msg.senderKeyDistributionMessage) {
                            try {
                                await repository.processSenderKeyDistributionMessage({
                                    authorJid: author,
                                    item: msg.senderKeyDistributionMessage
                                })
                            } catch (err) {
                                logger.error({ key: fullMessage.key, err }, 'failed to decrypt message')
                            }
                        }
                        if (fullMessage.message) {
                            Object.assign(fullMessage.message, msg)
                        } else {
                            fullMessage.message = msg
                        }
                        if (WABinary_1.isJidGroup(sender)) {
                            const mtype = getTypeMessage(fullMessage.message)
                            const message = fullMessage.message?.[mtype]
                            const contextInfo = message?.contextInfo
                            const mentionedJid = contextInfo?.mentionedJid
                            const processMessageLIDs = async (msgObj, msgType) => {
                                if (!msgObj?.contextInfo) return false
                                const contextInfo = msgObj.contextInfo
                                const mentionedJid = contextInfo.mentionedJid
                                let needsUpdate = false
                                if (Array.isArray(mentionedJid) && mentionedJid.length > 0) {
                                    const metadata = await global.groupMetadataCache(sender)
                                    const updatedMentionedJid = []
                                    for (const mentionedLid of mentionedJid) {
                                        if (typeof mentionedLid === "string" && mentionedLid.endsWith('@lid')) {
                                            const found = metadata.participants.find(p => p.lid === mentionedLid)
                                            if (found) {
                                                updatedMentionedJid.push(found.id)
                                                if (msgObj.text) {
                                                    msgObj.text = msgObj.text.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${found.id.split("@")[0]}`);
                                                } else if (msgObj.caption) {
                                                    msgObj.caption = msgObj.caption.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${found.id.split("@")[0]}`);
                                                }
                                            } else {
                                                const lid = WABinary_1.jidNormalizedUser(mentionedLid)
                                                const mentioned_jid = await repository.lidMapping.getPNForLID(mentionedLid)
                                                if (mentioned_jid) {
                                                    const pn = WABinary_1.jidNormalizedUser(mentioned_jid)
                                                    await repository.lidMapping.storeLIDPNMappings([{ lid, pn }])
                                                    updatedMentionedJid.push(pn)
                                                    if (msgObj.text) {
                                                        msgObj.text = msgObj.text.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${pn.split("@")[0]}`);
                                                    } else if (msgObj.caption) {
                                                        msgObj.caption = msgObj.caption.replace(new RegExp(`@${mentionedLid.split("@")[0]}`, "g"), `@${pn.split("@")[0]}`);
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
                                        msgObj.contextInfo.mentionedJid = updatedMentionedJid
                                    }
                                }
                                return needsUpdate
                            }
                            const quotedMessage = contextInfo?.quotedMessage
                            if (quotedMessage) {
                                const quotedMtype = getTypeMessage(quotedMessage)
                                const quotedMsgObj = quotedMessage[quotedMtype]
                                if (quotedMsgObj?.contextInfo) {
                                    await processMessageLIDs(quotedMsgObj, quotedMtype)
                                }
                            }
                        }
                    } catch (err) {
                        const errorContext = {
                            key: fullMessage.key,
                            err,
                            messageType: tag === 'plaintext' ? 'plaintext' : attrs.type,
                            sender,
                            author,
                            isSessionRecordError: isSessionRecordError(err)
                        }
                        logger.error(errorContext, 'failed to process sender key distribution message')
                        fullMessage.messageStubType = WAProto_1.proto.WebMessageInfo.StubType.CIPHERTEXT
                        fullMessage.messageStubParameters = [err.message.toString()]
                    }
                }
            }
            
            if (!decryptables) {
                fullMessage.messageStubType = WAProto_1.proto.WebMessageInfo.StubType.CIPHERTEXT
                fullMessage.messageStubParameters = [NO_MESSAGE_FOUND_ERROR_TEXT]
            }
        }
    }
}

function isSessionRecordError(error) {
    const errorMessage = error?.message || error?.toString() || ''
    return DECRYPTION_RETRY_CONFIG.sessionRecordErrors.some(errorPattern => errorMessage.includes(errorPattern))
}

module.exports = {
  NACK_REASONS, 
  decodeMessageNode, 
  decryptMessageNode, 
  extractAddressingContext, 
  MISSING_KEYS_ERROR_TEXT, 
  DECRYPTION_RETRY_CONFIG, 
  NO_MESSAGE_FOUND_ERROR_TEXT
}