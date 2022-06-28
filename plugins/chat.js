let handler = async (m, { conn, participants }) => {
    await conn.sendButton(m.chat, 'Iyaa....\nAda Yang Bisa Dibantu? @'+m.sender.split`@`[0], '© 3S~Bot', {'button[0]': 'Menu', 'row[0]': '.menu', 'button[1]': 'Owner', 'row[1]': '.owner', 'button[2]': 'Donasi', 'row[2]': '.donasi'}, m, { mentions: [m.sender] })
   }
handler.help = ['Bot']
handler.customPrefix = /^Bot$/i
handler.command = new RegExp
module.exports = handler