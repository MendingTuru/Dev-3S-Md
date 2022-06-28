let fetch = require('node-fetch')
let handler = async(m, { conn, args}) => {
	
  function sendImage(jid, caption, url, fileName, quoted, mention, opt = {}) {
  	conn.sendMessage(m.chat, { caption: caption, image: { url: url, fileName: fileName }, mentions: mention, ...opt}, { quoted: quoted, ...opt})
  }
	
  if(args[0] == 'seksi' || args[0] == 'sex' || args[0] == 'sexsi'){
      if(!args[1]){
      	let res = await fetch('https://api.waifu.pics/nsfw/waifu')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          sendImage(m.chat, `Istri ${await conn.getName(m.sender)}`, json.url, 'waifu.jpg', m, m.mentionedJid)
      }
      else{
      	let res = await fetch('https://api.waifu.pics/nsfw/waifu')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          sendImage(m.chat, `Istri ${args[1]}`, json.url, 'waifu.jpg', m, m.mentionedJid)
      }
  }
  else if(args[0] !== null) {
      if(!args[0] == 'seksi' || !args[0] == 'sex' || args[0] == 'sexsi'){
          let res = await fetch('https://api.waifu.pics/sfw/waifu')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          sendImage(m.chat, `Istri ${args[0]}`, json.url, 'waifu.jpg', m, m.mentionedJid)
      }
  }
  else{
  	let res = await fetch('https://api.waifu.pics/sfw/waifu')
      if (!res.ok) throw await res.text()
      let json = await res.json() 
      if (!json.url) throw 'Error!'
      sendImage(m.chat, `Istri ${await conn.getName(m.sender)}`, json.url, 'waifu.jpg', m, m.mentionedJid)
  }
}
handler.help = ['']
handler.tags = ['internet']
handler.command = /^(istri)$/i

module.exports = handler