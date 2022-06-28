let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa Kak?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.helper.includes(who.split`@`[0])) throw 'Sudah Masuk!'
    global.helper.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Terima kasih ya sudah report bug, selamat kamu mendapatkan rank Helper di bot!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

  

}

handler.help = ['addhelper *@user*']

handler.tags = ['owner']

handler.command = /^(add|tambah|\+)helper$/i

handler.rowner = true

module.exports = handler