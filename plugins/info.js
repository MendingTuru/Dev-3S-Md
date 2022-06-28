let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'mau info apa kak?, (uptime, prems, owner) '

  conn.reply(m.chat, `Lagi dibuat`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}
handler.help = ['info (uptime, preme, owner']
handler.tags = ['info']
handler.command = /^info$/
handler.rowner = false
handler.premium = false

module.exports = handler