let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *DONASI KAK* 』━━━━
➸ Dana : 0831-7588-6677
➸ Gopay : 0831-7588-6677
➸ Pulsa : 0831-7588-6677 
➸ Saweria : https://saweria.co/3SBot
*➸ QRIS : Chat Owner*

(Melanggar Rules Di Ban 1 hari) 
Donasi supaya bot terus update & Aktif

`.trim(), '© 3S~Bot', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', 'https://telegra.ph/file/1149dc82a0cc9d2d8b0c5.jpg') // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler