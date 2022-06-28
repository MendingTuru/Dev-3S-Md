let handler = async (m, { conn}) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	
  await conn.groupDemoteAdmin(m.chat, [who])
}
handler.help = ['mampus']

handler.command = /^m(ampus)$/i

module.exports = handler
