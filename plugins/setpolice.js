let handler = async function (m, { text, usedPrefix, conn}) {
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
  if (!text) throw `Siapa yang mau di set police?`
  let user = global.db.data.users[who]
  if (user.police === true) throw `Kamu Sudah police`
  user.police = true
  await conn.sendButton(m.chat, `Selamat @${who.split`@`[0]}. Kamu sekarang sudah menjadi Police Bot
Kami Harap Kamu Tidak Melanggar Rules
Silahkan Baca Rules Terlebih Dahulu`, '© 3S~Bot', { 'button[0]': 'Rules', 'row[0]': '.rules' }, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
  }
handler.help = ['setpolice @user ']
handler.tag = ['owner']
handler.command = /^setpolice$/

handler.owner = true
module.exports = handler
