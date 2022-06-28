let handler = async(m, { conn, args, usedPrefix }) => {
  
    if (args.length == 0) return conn.sendButton(m.chat, `Harap masukan Kode FreeGiftmu!\nJika Belum Ada Silahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    if (args[0] == 'Police~3S~Bot') {

    if (new Date - global.db.data.users[m.sender].lastpolicegift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n750000 XP \n2500 Limit! \n20000 Money', m)
    global.db.data.users[m.sender].exp += 750000
    global.db.data.users[m.sender].limit += 2500
    global.db.data.users[m.sender].money += 20000
    global.db.data.users[m.sender].lastpolicegift = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali!!', m)
   } else conn.sendButton(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    }
handler.help = ['policegift <kode>']
handler.tags = ['main']
handler.command = /^(policegift)$/i
handler.police = true

module.exports = handler