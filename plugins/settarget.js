let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw 'nomor nya? '
    
    let user = global.teks.data.target
    user.nomor = text
    
    conn.reply(m.chat, `Sukses menambahkan ${text} ke target spam`,m)
  
}
handler.help = ['starget nomor']
handler.tags = ['premium']
handler.command = /^starget$/i
handler.premium = true
module.exports = handler