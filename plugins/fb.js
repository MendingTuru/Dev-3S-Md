let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
m.reply('_*Fitur Sedang Dalam Tahap Perbaikan*_')

}
handler.help = ['fb <url>', 'facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|facebook$/i


module.exports = handler