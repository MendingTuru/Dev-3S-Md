let handler = async (m, { conn, participants }) => {
    m.reply(` *『 Info Rank 』*
    
➤ Member = User Gratisan
➤ Premium = User Premium
➤ Police = Police Bot
➤ Owner = Owner Bot
➤ Owner & Premium = Owner Bot & User Premium`) 
}
handler.help = ['rank']
handler.tags = ['main']
handler.command = /^rank$/i
handler.premium = false

module.exports = handler