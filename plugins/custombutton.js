let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, args}) => {

let [jaw1, jaw2, per] = text.split("|")
await conn.sendButton(m.chat, per, '©Undefined Bot', {"button[0]": `${jaw1}`, "row[0]": `${args[6]}`, "button[1]": `${jaw2}`, "row[1]": `${args[8]}`}) 
}
handler.help = ['custombutton jawaban1 | jawaban2 | pertanyaan']
handler.tags = ['main']
handler.command = /^c(ustombutton)$/i

module.exports = handler