let brainly = require("brainly-scraper")
let handler = async function (m, { text, usedPrefix, command }) {
if (!text) return m.reply(`uhm.. soalnya mana?\n\ncontoh:\n${usedPrefix + command} apa itu javascript?`)
let res = await brainly(text)
let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
m.reply(answer)
}

handler.help = ['brainly <soal>']
handler.tags = ['internet']
handler.command = /^brainly$/i
handler.limit = false

module.exports = handler
