let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.chat(6283175886677 + `@s.whatsapp.net`, ` *Ownerku Ada Yang Manggil Tuh😉*`, m)

  conn.reply(m.chat, `
Done! 
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@Oner/i
handler.command = new RegExp

module.exports = handler