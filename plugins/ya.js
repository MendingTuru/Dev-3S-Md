let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    
    conn.reply(m.chat, `Safa?`) 
}

handler.help = ['kepo']
handler.tags = ['owner']
handler.command = /^UwU$/
handler.rowner = true
handler.mods = true

module.exports = handler