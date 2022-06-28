let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'TOS')).buffer(), `
❛ Dilarang Membuat Instance Lebih Dari limit
❛ Dilarang Otak-atik provider agar tidak ke disable
❛ Kena Alert=garansi hilang
❛ Tersuspend ketika sudah membuat instance= garansi hilang
っLainnya join discord`.trim(), `©Victrius Store `, 'PAYMENT', '.payment', 'VICTRIUS STORE', '.vicstore', m)

handler.help = ['tos']
handler.tags = ['shop']
handler.command = /^t(os)$/i

module.exports = handler
