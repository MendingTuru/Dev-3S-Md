let { WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime } = require('@adiwajshing/baileys') 
		
let handler = async (m, { conn, command, args }) => {
	let id = m.chat
const rows = [
 {title: '---Money Bot---', description: "", rowId:"hargamoney"},
 {title: 'Buy Xp', description: "100 money bot = 1000 xp", rowId:"moneytoxp"}, 
{title: 'LAGI DIBUAT', description: "COMING SOON", rowId:"COMING SOON"}
]

const sections = [{title: "Shop Bot", rows: rows}]

const button = {
 buttonText: 'List Shop', 
 description: "Halo ini adalah list shop bot",
 sections: sections,
 listType: 1
}

const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)
}

handler.help = ['shop']
handler.tags = ['main']
handler.command = /^shop(list|menu)$/
handler.rowner = false
handler.mods = false

module.exports = handler
