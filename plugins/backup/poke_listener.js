let handler = m => m
handler.before = async function (m) {
	if(m.text.toLowerCase() == 'pokeball'){
        if(global.db.data.pokerole[m.sender].room == true){
		    conn.reply(m.chat, `Pokeball :) `) 
            global.db.data.pokerole[m.sender].room = false
	    }
	}
	if(m.text.toLowerCase() == 'asu'){
		conn.reply(m.chat, `Tobat bro`, m) 
	}
}
module.exports = handler