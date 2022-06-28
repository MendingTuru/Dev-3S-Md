let handler = async (m, { conn, args }) => {
  if(!args[0]) return conn.reply(m.chat, `Missing argument`, m) 
  if(!args[1] && !args[2] || !args[2]) {
  	if(args[0][0] == 0) return conn.reply(m.chat, 'Nomor harus kode negara bukan 0, contoh 628', m) 
      if(isNaN(args[0])) return conn.reply(m.chat, 'Harus nomor bukan '+args[0], m) 
  	let user1 = `${args[0]}@s.whatsapp.net`
      return conn.reply(m.chat, `${'@'+user1.split`@`[0]}`, m, { mentions: [user1] })
  }
  if(args[0][0] == 0 ||  args[2][0] == 0) return conn.reply(m.chat, 'Nomor harus kode negara bukan 0, contoh 628', m) 
  if(isNaN(args[0])) return conn.reply(m.chat, 'Harus nomor bukan '+args[0], m) 
  if(isNaN(args[2])) return conn.reply(m.chat, 'Harus nomor bukan '+args[2], m) 
  let user1 = `${args[0]}@s.whatsapp.net`
  let user2 = `${args[2]}@s.whatsapp.net`
  conn.reply(m.chat, `${'@'+user1.split`@`[0]} ${args[1]} ${'@'+user2.split`@`[0]}`, m, { mentions: [user1, user2] }) 
}
handler.help = ['tag nomor1 teks nomor2']
handler.tags = ['main']
handler.command = /^tag$/i

module.exports = handler
