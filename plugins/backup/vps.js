let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'VPS - RDP')).buffer(), `
*_VPS-RDP_*
━━━━━━━━━━━━━━━━━━━━━━━━━━
╰ RAM 2GB/2 vCore    : Rp. 35.000/Bulan
╰ RAM 4GB/2 vCore    : Rp. 55.000/Bulan
╰ RAM 8GB/2 vCore    : Rp. 100.000/Bulan
╰ RAM 16GB/4 vCore  : Rp. 160.000/Bulan
╰ RAM 32GB/8 vCore  : Rp. 250.000/Bulan
━━━━━━━━━━━━━━━━━━━━━━━━━━
*NOTE*
ˇ Region Singapore
ˇ Garansi 15 hari
ˇ Replace vps-rdp max 1x
ˇ Tambah SSD : Rp. 2000/10gb
ˇ Region Indonesia +10000
ˇ Harap Baca TOS
ˇ VPS-RDP ini menggunakan Provider Google Cloud Platform yang sangat aman dari kata *SUSPEND*`.trim(),`© Victrius Store`, 'ToS VPS RDP', '.tosvps', 'Payment', '.payment') 
handler.help = ['vps']
handler.tags = ['vicstore']
handler.command = /^v(ps)$/i

module.exports = handler