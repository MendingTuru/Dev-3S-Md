let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, participants, text, usedPrefix, command }) => {
	scrap.pinterest('husbu', 'husbu keren', 'husbu ganteng').then(a => a[Math.floor(Math.random() * a.length)]) .then(b => conn.sendFile(m.chat,b,b,'Husbu'))
   }
    
handler.help = ['husbu']
handler.tags = ['internet']
handler.command = /^(husbu)$/i
handler.limit = true

module.exports = handler