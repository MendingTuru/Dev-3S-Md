let fetch = require('node-fetch') 
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (m.chat == '6282181661561-1621953929@g.us') {
  	conn.reply(m.chat, `ngapain end group Undefined Bot`) 
      }
  if (m.chat == 'staff') {
  	conn.reply(m.chat, `ngapain end group staff HydroKids`) 
      }
  if (m.chat == '6281221906162-1614673412@g.us') {
  	conn.reply(m.chat, `ngapain end group VictriusMC`) 
      }
  if (m.chat == 'undefined') {
  	conn.reply(m.chat, `ngapain end group Undefined`) 
      }
  if (user.premium == true) {
  	if (user.end == true) {
  	   conn.reply(m.chat, `Bye Guys`) 
  user.end = false
         await conn.groupLeave(m.chat)

         }
      if (user.end == false) {
      	conn.reply(m.chat, `Kamu tidak memiliki izin untuk end group`) 
      }
  }
  else if (user.raihan == true) {
  	if (user.end == true) {
  	   conn.reply(m.chat, `Bye Guys`) 
         user.end = false
         await conn.groupLeave(m.chat)
         }
      if (user.end == false) {
      	conn.reply(m.chat, `Kamu tidak memiliki izin untuk end group`) 
      }
  }
  else {
  	conn.reply(m.chat, `Kamu Bukan User Premium`)
  }

}
handler.tags = ['premium']
handler.botAdmin = true
handler.admin = true
handler.command = /^(endgroup)$/i

module.exports = handler

