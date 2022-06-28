let handler = async (m, { conn, participants }) => {
    m.reply(` *『 Info Role 』*
    
➤ Level 0 - 10 = Beginner
➤ Level 11-20 = Warrior
➤ Level 21-30 = Elite
➤ Level 31-40 = Master
➤ Level 41-50 = Grandmaster
➤ Level 51-60 = Epic
➤ Level 61-100 = Legend
➤ Level 101-150 = Mytich
➤ Level 151- ~ = Mytich Glory
`) 
   }
handler.help = ['role']
handler.tags = ['main']
handler.command = /^role$/i
handler.premium = false

module.exports = handler