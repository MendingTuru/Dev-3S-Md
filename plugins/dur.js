let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Durability yang akan di set'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let limit = poin
    let users = global.db.data.invmenu
    users[who].durability = poin

    conn.reply(m.chat, `Durabilty @${who.split`@`[0]} sudah di set menjadi ${poin}!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}

handler.help = ['setdur @user <amount>']
handler.tags = ['owner']
handler.command = /^s(etdur)$/
handler.rowner = false
handler.police = true

module.exports = handler

