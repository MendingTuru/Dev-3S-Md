let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa kak yg mau dijadikan Helper?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let user = global.db.data.users[who]
    user.helper = true
    user.rank = 'Helper'
    
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah masuk Database info`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['shelper *@user*']
handler.tags = ['owner']
handler.command = /^shelper$/i
handler.rowner = true
module.exports = handler