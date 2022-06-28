let handler = async(m, { conn, args, usedPrefix }) => {
  
    if (args.length == 0) return conn.sendButton(m.chat, `Harap masukan Kode FreeGiftmu!\nJika Belum Ada Silahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    if (args[0] == 'Member~3S~Bot') {

    if (new Date - global.db.data.users[m.sender].lastmembergift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n50000 XP \n100 Limit! \n2000 Money', m)
    global.db.data.users[m.sender].exp += 50000
    global.db.data.users[m.sender].limit += 100
    global.db.data.users[m.sender].money += 2000
    global.db.data.users[m.sender].lastmembergift = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali!!', m)
   } else conn.sendButton(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    }
handler.help = ['membergift <kode>']
handler.tags = ['main']
handler.command = /^(membergift)$/i

module.exports = handler