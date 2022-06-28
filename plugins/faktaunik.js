/**
diupload oleh https://github.com/uhdahlah
**/

let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://bx-hunter.herokuapp.com/api/fakta?apikey=fd9oKLvN')
  f = await ddd.json()
  await conn.sendButton(m.chat,`*『 FAKTA 』*
  
${f.result}`, '© 3S~Bot', { 'button[0]': 'Fakta', 'row[0]': '.fakta' }, m)
} 
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
