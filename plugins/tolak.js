let fetch = require('node-fetch') 
let handler = async function (m, { text, usedPrefix }) {
	global.db.data.users[m.sender].banned = true
	await conn.sendButton(m.chat, `Terima Kasih ${'@'+m.sender.split`@`[0]} sudah membaca Rules 3S~Bot
	
	Karena Kamu Tidak Menerima Rules, Maka Kamu Di Banned
	Silahkan Chat Owner Untuk Unbanned

Hormat kami 3S~Bot`, '© 3S~Bot', { 'button[0]': 'Menu', 'row[0]': '.menu', 'button[1]': 'Owner', 'row[1]': '.owner' }, m, { mentions: [m.sender] })
  }

handler.command = /^(tolak)$/i

module.exports = handler

