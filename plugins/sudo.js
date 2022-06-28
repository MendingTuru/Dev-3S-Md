const { newMessagesDB } = require("@adiwajshing/baileys")

let handler = async (m, { conn, text }) => {
  if (!text) throw `command nya apa blok`
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let user = global.db.data.users
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trimStart()
  //if (user[who].afk > 1) {
  	//return conn.reply(m.chat, `Kamu Tidak Boleh Sudo Orang Afk`,m) 
  //}
  if(who.endsWith("@s.whatsapp.net") == false) who = who+'@s.whatsapp.net'
  if(/:\d+@/gi.test(who) == false){ 
    let [n, s] = who.split('@')
    who = n+':1'+s
  }
  conn.sudoMessage(who, m.chat, txt, { idM: m.id, me: false, parti: m.mentionedJid[0]}) 
}
handler.command = /^sudo$/
handler.rowner = true

module.exports = handler