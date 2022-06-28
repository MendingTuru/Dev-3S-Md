let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'TOS VPS - RDP')).buffer(), `
*TOS VPS/RDP*                               
*━━━━━━━━━━━━━━━━━━━━━━━━━━*
1. Jangan melakukan DDos, Hacking, Mining, Carding, Nonton 18+
2. Jangan mengotak atik Firewall Sembarangan. Jika Port 3389 Ke Close Kami Tidak Akan Bertangung Jawab.
3. Jangan Pernah Untuk Mematikan VPS, kami tidak akan bertanggung jawab jika vps anda mati karena di shutdown.
4. Jangan Pernah Menggunakan VPN yang berbentuk mengganti ip device (Google Extension Boleh, Karena Hanya Mengganti Ip CHROME)
5. Jangan HIGH LOAD
OVERLOAD = LANGGAR TOS
6. Jika vps rusak atau apa apa ga boleh refund tapi diganti vps baru
7. Replace vps/rdp max. 1x
*_DIHARAPKAN SELALU BACKUP VPS/RDP , JIKA DATA HILANG SECARA TERSENDIRI NYA KAMI TIDAK AKAN TANGGUNG JAWAB_*
_Lainnya Pc Aja_`.trim(),`© Victrius Store`, 'VicStore', '.vicstire', 'Payment', '.payment') 

handler.help = ['tosvps']
handler.tags = ['vicstore']
handler.command = /^t(osvps)$/i

module.exports = handler
