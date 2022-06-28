let eU = require('emoji-unicode')

let handler = async (m, {conn, text}) => { 
	
	let hadiah = {
		'1f4b51f4b51f4b5': [10000, 'money']
		'
	
	let user = global.users[m.sender]
	let su
    let poin = parseInt(text) 
    poin ? poin = poin : poin = 0
    if(poin === 0) return m.reply('Need Ban? chat owner') 
    if (user.spin <= poin) return m.reply('spin tidak mencukupi untuk melakukan gacha') 
    user.spin -= poin
    let a, b, c = pickRandom(['💵','💰', '❌', '✅', '👑'])
    conn.reply(m.chat,` Spin ${poin}
${a} ${b} ${c}
- ${poin} spin`,m)
    if((eU(a) === eU(b)) && (eU(a) === eU(c))){
    	
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
    


handler.help = ['spin ']
handler.tags = ['game']
handler.command = /^spin$/
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
