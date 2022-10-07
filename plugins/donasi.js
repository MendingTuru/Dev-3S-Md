let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *DONASI KAK* 』━━━━
➸ Dana : 0878-3214-7584
➸ Gopay : 0878-3214-7584
➸ Pulsa : 0878-3214-7584 
➸ Saweria : https://saweria.co/kokopangeran
*➸ QRIS : Chat Owner*

(Melanggar Rules Di Ban 1 hari) 
Donasi supaya bot terus update & Aktif

`.trim(), '© 3S~Bot', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', 'https://telegra.ph/file/1149dc82a0cc9d2d8b0c5.jpg') // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler
