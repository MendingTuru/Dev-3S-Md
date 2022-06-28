const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  if(m.chat === '6285754179412-1634810574@g.us') {
  	conn.reply(m.chat, `kamu perlu izin wa.me/6285810646280 ðŸ˜­`, m)
  } else {
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: m
      }
    ),
    text || q.text 
  )
  await conn.relayWAMessage(msg)
}}
handler.customPrefix = /@a/i
handler.command = new RegExp

handler.group = true
handler.admin = true

module.exports = handler

