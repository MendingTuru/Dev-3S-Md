let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Promo')).buffer(), `${global.teks.data.promo.texts}`.trim(), `©Undefined Bot
© Victrius Store`, 'Payment', '.payment', 'TOS', '.tos')
handler.help = ['promo']
handler.tags = ['vicstore']
handler.command = /^p(romo)$/i

module.exports = handler