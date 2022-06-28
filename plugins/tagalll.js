let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teks = `『 Pesan 』\n${text ? text : ''}\n\n╭─『 Tag All 』\n`
  for (let mem of participants) {
  teks += `│ ⇒ @${mem.id.split('@')[0]}\n`}
  teks += `╰── *Next* ──\n`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

handler.group = true
handler.admin = true

module.exports = handler