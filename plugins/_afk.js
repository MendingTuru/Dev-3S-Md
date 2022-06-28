let handler = m => m
handler.before = function(m, { conn }) {
  let user = global.users[m.sender]
  let res = user.afkReason ? user.afkReason : ''
  let mention = conn.parseMention(res)
  if (user.afk > -1) {
    conn.reply(m.chat, `
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}
`.trim(), m, (/@6/i.test(user.afkReason)) ? { mentions: [m.sender, ...mention] } : { mentions: [m.sender] })
    user.afk = -1
    user.afkReason = ''
  }
  if (!m.quoted) return
  let tag
  (global.users[m.quoted.sender].afk > 0) ? tag = m.quoted.sender : ( conn.parseMention(m.text).map(jid => global.users[jid].afk > 0 ? tag = jid : '')) 
  if (tag) {
    let reason = global.users[tag].afkReason || ''
    let afkTime = global.users[tag].afk
    conn.reply(m.chat, `\nJangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}
`.trim(), m, (mention.map(u => typeof u === 'string')) ? { mentions: [m.sender, m.quoted.sender, ...mention] } : { mentions: [m.sender, m.quoted.sender] })
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
