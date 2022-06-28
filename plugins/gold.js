let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
  if (!text) throw 'Nama lah'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let url = `https://api.zeks.xyz/api/gplaybutton?apikey=X1XZkesyWdKspzdw2lyznimvR7e&text=${text}`
  let res = await fetch(url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
}
handler.help = ['yutubgold']
handler.tags = ['internet']
handler.command = /^(yutubgold)$/i
module.exports = handler