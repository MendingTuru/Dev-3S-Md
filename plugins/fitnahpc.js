let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	let jids = '6282181661561@s.whatsapp.net'
  let ha = conn.sendMessage(jids, 'omg', MessageType.text, {contextInfo: {quotedMessage: {extendedTextMessage: {text: 'what'}}}})
  await conn.deleteMessage(jids, { id: ha.messageID, remoteJid: jids, fromMe: true })
}
handler.command = /^(fpc)$/
handler.premium = true
module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
