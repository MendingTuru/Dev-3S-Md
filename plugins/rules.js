let fetch = require('node-fetch') 
let handler = async (m, { conn, args, command }) => {
	await conn.sendButton(m.chat, `       ━━━『 *Rules 3S Bot* 』━━━
            
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot. 
➤ Dilarang Untuk Menggunakan Command 18+ Berlebihan (Ketahuan = Banned)
➤ Jangan Call/VC Bot Kalau Tidak Aktif.
➤ Call/VC Bot Auto Block.


━━━━『 *PENTING!* 』━━━━
  
*➤ Kami Tidak Pernah Meminta Anda Untuk Berdonasi! Ingin Donasi Chat Owner.*
*➤ Kami Tidak Menyimpan Gambar, Video,  Audio, Dan Dokumen Yang Anda Kirim.*
*➤ Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi.*
*➤ Jika Menemukan Bug/Error Silahkan Langsung Lapor Ke Owner Bot.*
*➤ Jangan Toxic, Jika Kamu Toxic Dan Di Banned, Silahkan Chat Owner.*
*➤ Jika Kamu Menelpon Bot Dan Di Block, Silahkan Chat Owner.*
*➤ Batas Unbanned Setiap User Maksimal 5 Kali, Lebih Dari 5 Kali OWNER TIDAK AKAN BERTANGGUNG JAWAB.*
*➤ Apapun Yang Anda Perintah Pada Bot Ini , KAMI TIDAK AKAN BERTANGGUNG JAWAB.*


━━━━『 *Rules Owner Bot* 』━━━━

➤ Jangan Addlimit & Addxp Berlebihan. Batas Addlimit 5000/Command & Batas Addxp 1000000/Command
➤ Batas Addlimit & Addxp 5 Kali/Hari
*➤ Owner Biasa Dilarang Unban User Yang Terdeteksi Toxic*
➤ Jangan Sprem & Dprem Seenaknya. Batas Ban & Unban 10 Kali/Hari
➤ Dilarang Broadcast Bot Jika Tidak Perlu. 
➤ Jangan Ban & Unban User Seenaknya. 
➤ Dilarang Upsw. 
*➤ Dilarang Melebihi Exp Dan Limit Real Owner*
*➤ Jika Kamu Mau Melakukan Command Tersebut, Silahkan Minta Izin Ke REAL OWNER.*


━━━━『 *Rules Police Bot* 』━━━━

➤ Jangan Addlimit & Addxp Berlebihan. Batas Addlimit 1000/Command & Batas Addxp 500000/Command
➤ Batas Addlimit & Addxp 3 Kali/Hari
*➤ Police Dilarang Unban User Yang Terdeteksi Toxic*
➤ Jangan Ban & Unban User Seenaknya. Batas Ban & Unban 5 Kali/Hari
*➤ Dilarang Melebihi Exp Dan Limit Real Owner*
*➤ Jika Kamu Mau Melakukan Command Tersebut, Silahkan Minta Izin Ke REAL OWNER.*


━━━━『 *Rules User Premium* 』━━━━
➤ Dilarang Menjoinkan Bot Ke Grup Yang Tidak Kamu Miliki
➤ Unlimited Unban & Unblock
*➤ Jika Kamu Menjoinkan Bot Ke Grup Yang Tidak Kamu Miliki, Maka Bot Akan Keluar Dari Grup Tersebut*


━━━━『 *Rules Admin & Group 3S Bot* 』━━━━

➤ Jangan Spam Invite Dan Kick Menggunakan Fitur Bot.
➤ Jika Ada Yang Spam, Bantu Group Close Untuk Menghindari Overload.
➤ Enable Restrict Untuk Mengaktifkan Fitur Admin.
➤ Gk Suka Sama 3S~Bot, Kick Aja 🥱.


━━━━『 *Konsekuensi Bila Melanggar Rules* 』━━━━
➤ *Bagi Owner, Jika Owner Melanggar Rules Tersebut, Maka Owner Tersebut Akan Di Demote Oleh REAL OWNER.*
➤ *Bagi Police, Jika Police Melanggar Rules Tersebut, Maka Police Tersebut Akan Di Demote Oleh REAL OWNER.*
➤ *Owner & Staff Bot Berhak Banned Sementara / Permanent Dan Keluar Dari Grup Yang Kamu Kelola.*
`, `*Hormat Kami*\n*© Staff 3S~Bot*\n*© 3S~Bot*`, {'button[0]': 'Terima', 'row[0]': '.terima', 'button[1]': 'Tidak', 'row[1]': '.tolak'}, m)}
         
handler.help = ['rules']
handler.tags = ['rules']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler