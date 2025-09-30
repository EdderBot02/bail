"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WAProto_1 = require("../../WAProto")

Object.defineProperty(exports, "__esModule", { value: true })

const WAMessageAddressingMode = {
	PN: 'pn', 
	LID: 'lid'
}

module.exports = {
  WAMessageAddressingMode, 
  WAMessageStubType: WAProto_1.proto.WebMessageInfo.StubType, 
  WAMessageStatus: WAProto_1.proto.WebMessageInfo.Status, 
  WAProto: WAProto_1.proto
}