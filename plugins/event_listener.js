let handler = m => m
handler.before = async function (m, { conn, text }) {
	let id = m.sender
	if(m.quoted && (typeof global.eventBot.start[id] === 'object' && global.eventBot.start[id]['info'] === 'Running...')){
        if(/Soal:/i.test(m.quoted.contentText) === true){
		    conn.sudoMessage(m.sender, m.chat, `.event start ${m.text}`, { parti: m.sender })
		    return
		} else if(/Event dimana?/i.test(m.quoted.text) === true){
			if(/@g.us|/i.test(m.text) === true){
				let [where, jawaban] = m.text.split("|") 
				conn.reply(where, `EVENT!
${global.eventBot.start[id]['soal']}
Price: ${global.eventBot.start[id]['price']}
`)
                if(typeof global.eventBot.running[where] !== 'object'){
                    global.eventBot.running[where] = {}
                }
                global.eventBot.running[where][id] = {}
                global.eventBot.running[where][id]['soal'] = global.eventBot.start[id]['soal']
                global.eventBot.running[where][id]['price'] = global.eventBot.start[id]['price']
                global.eventBot.running[where][id]['ans'] = jawaban
                delete global.eventBot.start[id]
            }
        }              
	} else if(m.quoted && typeof global.eventBot.running[m.chat] === 'object'){
		if(/EVENT!/i.test(m.quoted.text)){
            let ids = Object.keys(global.eventBot.running[m.chat])
	        for(let i=0; i<Object.keys(ids).length;i++){
		        console.log('masuk') 
                id = ids[i]
                if(m.text.toLowerCase() === global.eventBot.running[m.chat][id]['ans'].toLowerCase()){
                	await this.sendButton(m.chat, 'Benar!\nSilahkan Chat Owner Untuk Mendapatkan Price!!', wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m) 
                    delete global.eventBot.running[m.chat][id]
                }
           }
       }
   }     
}

module.exports = handler