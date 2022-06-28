let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa kak yg mau dijadikan Owner?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let user = global.db.data.users[who]
    user.owner = true
    
    await conn.sendButton(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah masuk Database info
Kami Harap Kamu Tidak Melanggar Rules
Silahkan Baca Rules Terlebih Dahulu`, '© 3S~Bot', {'button[0]': 'Rules', 'row[0]': '.rules'}, m, { mentions: [who] }) 
{
        contextInfo: {
            mentionedJid: [who]
        }
    }
  
}
handler.help = ['sowner *@user*']
handler.tags = ['owner']
handler.command = /^sowner$/i
handler.rowner = true
module.exports = handler