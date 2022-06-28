let handler = async (m, { conn, text }) => {
	let users = global.db.data.users
	let who
	who = m.sender
    if (users[who].police == false) {
    	conn.reply(m.chat, `Dia Bukan Police`) }
    if (users[who].police == true) {
    users[who].police = false
    console.log(`masa police habis`) 
    conn.reply(m.chat, `Kamu mengundurkan diri dari rank police`,m) } }
    
handler.help = ['bue'] 
handler.tags = ['main']
handler.command = /^b(ye)$/
handler.helper = false
handler.police = true

module.exports = handler
