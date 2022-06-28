let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send4ButtonLoc(m.chat, await (await fetch(fla + 'Victrius Store')).buffer(), `
┌〔 Victrius Store 〕
├ WhatsApp : -
╰ Discord     : https://discord.io/Victrius-Store 
`.trim(), `©Undefined Bot
© Victrius Store`, 'Vps', '.vps','Provider', '.provider', 'Payment', '.payment', 'Vcc', '.vcc')
handler.help = ['vicstore']
handler.tags = ['vicstore']
handler.command = /^vicstore$/i

module.exports = handler
