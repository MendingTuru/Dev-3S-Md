let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
	if (!who) throw `hah?`
	if (who) {
	let user = global.db.data.users[who]
	user.raihan = true 
    
    conn.reply(m.chat, ` Selamat @${who.split`@`[0]}. Rank Kamu Sudah Raihan-Chan`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }
}

handler.help = ['raihanchan']
handler.tags = ['owner']
handler.command = /^r(aihanchan)$/
handler.rowner = true
handler.mods = true

module.exports = handler