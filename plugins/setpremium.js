let handler = async function (m, { text, usedPrefix, conn}) {
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
  if (!text) throw `Siapa yang mau di set premium?`
  let user = global.db.data.users[who]
  if (user.premium === true) throw `Kamu Sudah Premium`
  else if (user.premium == false) {
  	let a = new Date(100000);
      user.expired = a
  user.premium = true
  conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu kamu sekarang sudah premi`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })  }
  }
handler.help = ['setprem @user']
handler.tag = ['owner']
handler.command = /^setprem$/

handler.rowner = true
module.exports = handler
