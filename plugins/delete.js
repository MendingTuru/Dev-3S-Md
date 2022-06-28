let handler = async function (m, { conn }) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys, key} = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  //await conn.chatModify({ clear: { messages: { id: id, fromMe: fromMe}[0]} [] }, m.chat) 
    
    await conn.sendMessage(m.chat, { delete: m.quoted.fakeObj.key }) 
    m.reply('Done!')
}
handler.help = ['del', 'delete']
handler.tags = ['info']
handler.premium = true

handler.command = /^del(ete)?$/i

module.exports = handler
