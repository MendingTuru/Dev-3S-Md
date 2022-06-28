let handler = async (m, { conn, args, text}) => {
  
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user]) 
  let who = m.quoted.sender && m.mentionedJid[0]
  if (!who) throw 'Tag salah atau reply salah satu'
  let reason = text.replace('@' + who.split`@`[0], '').trim()
  if (!text) {
  	conn.reply(m.chat, `Bye`,m) 
      m.reply(`Kamu di kick`, who) 
  	await conn.groupRemove(m.chat, [who]) 
  } else {
  	conn.reply(m.chat, `Bye`) 
      m.reply(`Kamu di kick karena ${reason}`, who) 
  	await conn.groupParticipantsUpdate(m.chat, [who], "remove") 
  }

}
handler.help = ['headshot'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(headshot)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.owner = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
