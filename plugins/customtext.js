let fetch = require('node-fetch') 
let { toReadable } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
	(!text) ? text = 'gajelas lu anjing' : text = text
	let res = await (await fetch(fla + `${text}`)).buffer()
	conn.sendMessage(m.chat, { image: { url: toReadable(res) }, filename: text+'.jpg'}, { quoted: m }) 
  }
  
  handler.help = ['buat']
handler.tags = ['main']
handler.command = /^(buat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
module.exports = handler
