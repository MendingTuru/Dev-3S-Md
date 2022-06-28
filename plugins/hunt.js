let times = require('tiny-timer') 


let handler = async function (m, { text, usedPrefix, conn}) {
	conn.huntMode = conn.huntMode ? conn.huntMode : {}
	let id = m.chat
	let user = global.db.data.users[m.sender]

	if (!text) {
		throw `Fitur ini dalam pembuatan`
		}
    if (text == 'hunt') {
    	conn.reply(m.chat, `Kamu mendapatkan Undefined`) }
    else if (text == 'autohunt') {
    	if (user.huntmode == true) return conn.reply(m.chat, 'Bot kamu masih dalam mode autohunt')
    	let timeout = 60000
        let hunts = 1 * 1
        
        await conn.reply(m.chat, `Sedang Melakukan autohunt selama ${(timeout / 60000).toFixed(2)} menit`,m);
        user.huntmode = true
        
        function modeHuntDone() {
             conn.reply(m.chat, `Bot Selesai AutoHunt, kamu mendapatkan undefined`);
        user.huntmode = false;
        }
        
      setTimeout(modeHuntDone, timeout);
        }
        }
        
handler.help = ['bot hunt']
handler.tags = ['premium']

handler.command = /^(bot)$/i

handler.premium = true

module.exports = handler

	
	