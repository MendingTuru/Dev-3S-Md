let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukkan Nama'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let user = global.db.data.users[m.sender]
  user.name = text
  if (!text) {
  	conn.reply(m.chat,`Nama ${'@'+ who.split`@`[0]} telah diganti menjadi ${text ? '' + text : ''}`, m, { mentions: [who] })
  } 
}
handler.help = ['gantinama']
handler.tags = ['Owner']
handler.command = /^gantinama$/i
handler.owner = true

module.exports = handler