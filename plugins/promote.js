let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupParticipantsUpdate(m.chat, [user], "promote").catch(console.log)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')

handler.command = /^(promote|admin|\^|↑)$/i
handler.tags = ['admin']

handler.group = true
handler.botAdmin = true
handler.admin = true

module.exports = handler
