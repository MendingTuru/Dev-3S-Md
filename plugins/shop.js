let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *SHOP BOT* 』━━━━
➸ Dana : 0831-7588-6677
➸ Gopay : 0831-7588-6677
➸ Pulsa : 0831-7588-6677 
➸ Saweria : https://saweria.co/3SBot
*➸ QRIS : Chat Owner*

_*Jumlah Rank :*_
*➤ Premium : 10k/Bulan*
*➤ Premium : 15k/Permanent*
*➤ Police : 25k/Bulan*
*➤ Police : 30k/Permanent*
*➤ Premium & Police 40k/Permanent*

_*DISKON: DONASI DIATAS 15K DAPAT POLICE BOT / PREMIUM*_
_*PILIH SALAH SATU*_


_*Harga Sewaktu Waktu Bisa Berubah*_

_*Keuntungan Donasi Bagi Bot :*_ 
➤ Buat Sewa VPS
➤ Buat Beli Limit Apikey
➤ Supaya Bot Terus Update & Aktif

_*Keuntungan Donasi Bagi Para Donasi :*_ 
➤ Bisa Dapat Premium / Police
➤ Premium Unlimited Limit
➤ Bisa Menggunakan Fitur Premium
➤ Bisa Join Bot Ke Grup Whatsapp Kamu

*Note : Mau Donasi Chat Owner*

_*Harap Kirim Bukti Transaksi Jika Sudah Donasi*_


`.trim(), '© 3S~Bot', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', 'https://telegra.ph/file/1149dc82a0cc9d2d8b0c5.jpg') // Tambah sendiri kalo mau
handler.help = ['shopbot']
handler.tags = ['donasi']
handler.command = /^shopbot$/i

module.exports = handler