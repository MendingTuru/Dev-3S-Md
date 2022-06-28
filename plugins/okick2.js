let handler = async (m, { conn, args, text}) => {
  if (!text) throw 'Reply salah satu lah'
  await conn.groupRemove(m.quoted.sender) 

  
  m.reply(`Asik Ada Mangsa, Otw Headshot`) 
  conn.reply(m.chat,`👏BOOM HEADSHOTT💯,Selamat Tinggal  ${users} 👋👋👋👋Jangan Masuk Lagi 🙌`,m.text) 
}
handler.help = ['headshot'].map(v => 's' + v + 'm.quoted.sender')
handler.tags = ['owner']
handler.command = /^(sheadshot)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.owner = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
