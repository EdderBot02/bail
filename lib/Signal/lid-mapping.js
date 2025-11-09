"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIDMappingStore = void 0;
const logger_1 = __importDefault(require("../Utils/logger"));
const WABinary_1 = require("../WABinary");
//TODO: Caching
class LIDMappingStore {
    constructor(keys, onWhatsAppFunc) {
        this.keys = keys;
        this.onWhatsAppFunc = onWhatsAppFunc; // needed to get LID from PN if not found
    }
    /**
     * Store LID-PN mapping - USER LEVEL
     */
    async storeLIDPNMapping(lid, pn) {
        return this.storeLIDPNMappings([{ lid, pn }]);
    }
    /**
     * Store LID-PN mapping - USER LEVEL
     */
    async storeLIDPNMappings(pairs) {
        // Validate inputs
        const pairMap = {};
        for (const { lid, pn } of pairs) {
            if (!(((0, WABinary_1.isLidUser)(lid) && (0, WABinary_1.isPnUser)(pn)) || ((0, WABinary_1.isPnUser)(lid) && (0, WABinary_1.isLidUser)(pn)))) {
                logger_1.default.warn(`Invalid LID-PN mapping: ${lid}, ${pn}`);
                continue;
            }
            const [lidJid, pnJid] = (0, WABinary_1.isLidUser)(lid) ? [lid, pn] : [pn, lid];
            const lidDecoded = (0, WABinary_1.jidDecode)(lidJid);
            const pnDecoded = (0, WABinary_1.jidDecode)(pnJid);
            if (!lidDecoded || !pnDecoded)
                return;
            const pnUser = pnDecoded.user;
            const lidUser = lidDecoded.user;
            pairMap[pnUser] = lidUser;
        }
        logger_1.default.trace({ pairMap }, `Storing ${Object.keys(pairMap).length} pn mappings`);
        await this.keys.transaction(async () => {
            for (const [pnUser, lidUser] of Object.entries(pairMap)) {
                await this.keys.set({
                    'lid-mapping': {
                        [pnUser]: lidUser, // "554396160286" -> "102765716062358"
                        [`${lidUser}_reverse`]: pnUser // "102765716062358_reverse" -> "554396160286"
                    }
                });
            }
        }, 'lid-mapping');
    }
    /**
     * Get LID for PN - Returns device-specific LID based on user mapping
     */
    async getLIDForPN(pn) {
        var _a, _b, _c;
        if (!(0, WABinary_1.isPnUser)(pn))
            return null;
        const decoded = (0, WABinary_1.jidDecode)(pn);
        if (!decoded)
            return null;
        // Look up user-level mapping (whatsmeow approach)
        const pnUser = decoded.user;
        const stored = await this.keys.get('lid-mapping', [pnUser]);
        let lidUser;
        lidUser = stored[pnUser];
        if (!lidUser) {
            logger_1.default.trace(`No LID mapping found for PN user ${pnUser}; getting from USync`);
            const { exists, lid } = (_b = (await ((_a = this.onWhatsAppFunc) === null || _a === void 0 ? void 0 : _a.call(this, pn)))) === null || _b === void 0 ? void 0 : _b[0]; // this function already adds LIDs to mapping
            if (exists) {
                lidUser = (_c = (0, WABinary_1.jidDecode)(lid)) === null || _c === void 0 ? void 0 : _c.user;
            }
            else {
                return null;
            }
        }
        if (typeof lidUser !== 'string')
            return null;
        // Push the PN device ID to the LID to maintain device separation
        const pnDevice = decoded.device !== undefined ? decoded.device : 0;
        const deviceSpecificLid = `${lidUser}:${pnDevice}@lid`;
        logger_1.default.trace(`getLIDForPN: ${pn} → ${deviceSpecificLid} (user mapping with device ${pnDevice})`);
        return deviceSpecificLid;
    }
    /**
     * Get PN for LID - USER LEVEL with device construction
     */
    async getPNForLID(lid) {
        if (!(0, WABinary_1.isLidUser)(lid))
            return null;
        const decoded = (0, WABinary_1.jidDecode)(lid);
        if (!decoded)
            return null;
        // Look up reverse user mapping
        const lidUser = decoded.user;
        // TODO: remove this style and instead load all mappings somehow, and then assign them in the map
        const stored = await this.keys.get('lid-mapping', [`${lidUser}_reverse`]);
        const pnUser = stored[`${lidUser}_reverse`];
        if (!pnUser || typeof pnUser !== 'string') {
            logger_1.default.trace(`No reverse mapping found for LID user: ${lidUser}`);
            return null;
        }
        // Construct device-specific PN JID
        const lidDevice = decoded.device !== undefined ? decoded.device : 0;
        const pnJid = `${pnUser}:${lidDevice}@s.whatsapp.net`;
        logger_1.default.trace(`Found reverse mapping: ${lid} → ${pnJid}`);
        return pnJid;
    }
}
exports.LIDMappingStore = LIDMappingStore;
