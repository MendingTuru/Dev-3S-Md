
let handler = async (m, { conn, args }) => {
let asu = global.teks.data.virtex
conn.reply(m.chat, `${asu.texts}`) 
 }

handler.help = ['virtex']
handler.tags = ['premium']
handler.premium = true

handler.command = /^v(irtex)$/i

module.exports = handler
