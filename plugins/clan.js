let fetch = require('node-fetch')
let handler = async (m, { conn, text}) => {
 
 try{ let response = await conn.groupAdd('6283175886677-1635141524@g.us', [m.sender])
  let pp = await conn.getProfilePicture('6283175886677-1635141524@g.us').catch(_ => false)
  let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
  for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `Mengundang @${jid.split('@')[0]} menggunakan invite...`
    conn.reply('6283175886677-1635141524@g.us', `${teks}`) 
    await conn.sendGroupV4Invite('6283175886677-1635141524@g.us', jid, invite_code, invite_code_exp, false, 'Kamu mematikan invite, gunakan link ini', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }} catch (e){
  	conn.reply(m.chat, `Maaf sedang error, gunakan chat.whatsapp.com/EwTzMTo82TcHjWNpSf1lmL`, m)
      throw e
  }
}
handler.help = ['clan']
handler.private = true
handler.tags = ['help']
handler.command = /^(clan)$/i

module.exports = handler