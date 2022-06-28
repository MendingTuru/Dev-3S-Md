let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let a = args[0]
  console.log(a)
  let link = /https\:\/\/youtube\.com\/shorts\/([-_a-zA-Z0-9]{11})\?feature=share/
  let testlink = link.test(a)
  console.log(testlink) 
  if(testlink === true){
    let kill = a.replace("youtube.com/shorts", "youtu.be");
    let kill2 = kill.replace("?feature=share", "");
    await conn.reply(m.chat, `${kill2}`)
    args[0] = kill2;
    let server = (args[1] || 'id4').toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : 'id4')
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, false, _thumb || {})
} else {
	let server = (args[1] || 'id4').toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : 'id4')
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, false, _thumb || {})
}
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ' <url> [server: id4, en60]')
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

