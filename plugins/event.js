let { MessageType } = require('@adiwajshing/baileys')

global.eventBot = { 'start': {}, 'running': {}}
let wm = 'Undefined Bot'

let handler = async (m, { conn, text, args}) => {
	if(m.isGroup) return m.reply('Only Private Chat')
	if(args[0].toLowerCase() == 'start') {
		if(!args[1]) {
			if(typeof global.eventBot.start[m.sender] === 'object') { return m.reply('Sudah ada event yang dibuat') }
			conn.sendButton(m.chat, `Mau Tipe Soal Gimana?`, `${wm}`, { 'button[0]': 'Soal Essay', 'row[0]': '.event start tipe essay'}, m)
		    global.eventBot.start[m.sender] = {}
		} else {
			global.eventBot.start[m.sender]['info'] = 'Running...'
			//let [nol, txt] = text.split('start') 
			if(args[1] === 'tipe'){
				
                global.eventBot.start[m.sender]['tipe'] = `${args[2]}`
			    if(args[2] === 'essay'){
				    conn.sendButton(m.chat, `Soal: | Price:`, `${wm}`, {'button[0]': 'Cancel', 'row[0]': `.event cancel`}, m)
			    } else if(args[2] === 'pilgan'){
				
			    } 
			} else if(args[1] === 'confirm'){
				if(!global.eventBot.start[m.sender]['soal'] || !global.eventBot.start[m.sender]['price']) { return m.reply('Belum Ada Soal / Price, cek di .event list') }
				m.reply('Event dimana? Jawaban? contoh: 12345678@g.us|karena kamu wibu (reply pesan ini)') 
			} else {
			    let [soals, price] = text.split('|') 
			    let [ksg, soal] = soals.split('start') 
                global.eventBot.start[m.sender]['soal']= `${soal}`
                global.eventBot.start[m.sender]['price'] = `${price}`
                conn.sendButton(m.chat, `Apakah Sudah Benar?\n${soal}\n${price}`, `${wm}`, {'button[0]': 'Ya', 'row[0]': `.event start confirm`, 'button[1]': 'Cancel', 'row[1]': '.event cancel'}, m) 
            }
        }
    } else if(args[0].toLowerCase() == 'cancel'){
		if(!global.eventBot.start[m.sender]) return m.reply('Event tidak ditemukan') 
		delete global.eventBot.start[m.sender]
		return m.reply('Done!')
	} else if(args[0].toLowerCase() === 'list'){
		/*if(typeof global.eventBot.start[Object.keys(global.eventBot.start)] !== 'object') let eventStart === 'Tidak Ada'
		*if(typeof global.eventBot.running[Object.keys(global.eventBot.running)] !== 'object') let eventRunning === 'Tidak Ada'
		*let listStart
		*let listRunning
		*for(let i=0;i<Object.keys(global.eventBot.start).length;i++){
			*listStart[Object.keys(global.eventBot.start)[i]] = global.eventBot.start[Object.keys(global.eventBot.start)[i]]
		*}
		*for(let i=0;i<Object.keys(global.eventBot.running).length;i++){
			*listRunning[Object.keys(global.eventBot.running)[i]] = global.eventBot.running[Object.keys(global.eventBot.running)[i]]
		*}
		*return conn.reply(m.chat, `*List Event*
*${'@'+listStart.map(u => u.jid).split`@`[0]}
*`*/
	}
}
		
handler.help = ['event start|list|cancel|stop']
handler.tags = ['owner']
handler.command = /^event$/
handler.rowner = true

module.exports = handler