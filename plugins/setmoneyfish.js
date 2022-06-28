let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    if (money < 1000) throw 'Minimal 1000'
    let inv = global.db.data.invmenu
    inv[who].moneyfish += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Money Fish!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}

handler.help = ['moneyfish @user <amount>']
handler.tags = ['owner']
handler.command = /^m(oneyfish)$/
handler.rowner = true
handler.mods = true

module.exports = handler