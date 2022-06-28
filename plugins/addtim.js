//Tim ToD//

let handler = async (m, { conn, text }) => {
    
    if (global.ttod.includes( ${text}) ) throw 'dia udah menjadi tim ToD!'
    global.ttod.push(`${text}`)
    conn.reply(m.chat, `${text} sekarang masuk tim ToD!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addtim [@user]']
handler.tags = ['game']
handler.command = /^(add|tambah|\+)tim$/i

handler.rowner = false

module.exports = handler