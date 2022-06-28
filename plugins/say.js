let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
	if (!text) throw 'teksnya goblok'
	
	m.reply(m.chat, `${text}`, m) 
	}
handler.help = ['bilang ']
handler.tags = ['']
handler.command = /^b(ilang)$/i
handler.premium = true
module.exports = handler