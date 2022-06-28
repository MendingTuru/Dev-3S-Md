const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  let stiker = false
  let user = global.db.data.users[m.sender]
  let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
  if (text) {
    if (user.premium == true) {
          try {
              let q = m.quoted ? m.quoted : m
              let mime = (q.msg || q).mimetype || ''
              if (/image/.test(mime)) {
              let img = await q.download()
              if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
              stiker = await sticker(img, false, packname || global.packname, author || global.author)
          } else if (/video/.test(mime)) {
              if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
             let img = await q.download()
             if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
             stiker = await sticker(img, false, packname || global.packname, author || global.author)
         } else if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
            stiker = await sticker(img, false, packname || global.packname, author || global.author)
        } 
   } finally {
          if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
              quoted: m
          })
      }
   }
      else if (user.owner == true) {
          try {
              let q = m.quoted ? m.quoted : m
              let mime = (q.msg || q).mimetype || ''
              if (/image/.test(mime)) {
              let img = await q.download()
              if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
              stiker = await sticker(img, false, packname || global.packname, author || global.author)
          } else if (/video/.test(mime)) {
              if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
             let img = await q.download()
             if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
             stiker = await sticker(img, false, packname || global.packname, author || global.author)
         } else if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
            stiker = await sticker(img, false, packname || global.packname, author || global.author)
        } 
   } finally {
          if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
              quoted: m
          })
      }
   }
      else if (user.raihan == true) {
          try {
              let q = m.quoted ? m.quoted : m
              let mime = (q.msg || q).mimetype || ''
              if (/image/.test(mime)) {
              let img = await q.download()
              if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
              stiker = await sticker(img, false, packname || global.packname, author || global.author)
          } else if (/video/.test(mime)) {
              if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
             let img = await q.download()
             if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
             stiker = await sticker(img, false, packname || global.packname, author || global.author)
         } else if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
            stiker = await sticker(img, false, packname || global.packname, author || global.author)
        } 
   } finally {
          if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
              quoted: m
          })
      }
   }
      else {
        conn.reply(m.chat, `Kamu bukan premium`, m) 
      }
  } else {
         try {
             let q = m.quoted ? m.quoted : m
             let mime = (q.msg || q).mimetype || ''
             if (/image/.test(mime)) {
             let img = await q.download()
             if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
             stiker = await sticker(img, false, packname || global.packname, author || global.author)
         } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
            let img = await q.download()
            if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
            stiker = await sticker(img, false, packname || global.packname, author || global.author)
        } else if (/webp/.test(mime)) {
           let img = await q.download()
           if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
           stiker = await sticker(img, false, packname || global.packname, author || global.author)
       } 
  } finally {
         if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
             quoted: m
         })
     }
 }
}
handler.help = ['stiker (caption|reply media)', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.command = /^sc(tic?ker)?(gif)?(wm)?$/i
handler.premium = true 

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}