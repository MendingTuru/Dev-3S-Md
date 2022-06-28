let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  
  let errors = 'Command Salah! \nContoh: '+usedPrefix+'ban number|1d|reason (number bisa tag, @6282181661561)'
  function error(){
  	return conn.reply(m.chat, ''+errors, m, { mentions: ['6282181661561@s.whatsapp.net'] })
  }
  if(!text) return error()
  if(/|/.test(text) === false) return error()
  let [number, day, reason] = text.split('|')
  reason = (typeof reason !== 'undefined') ? reason : ''
  day = day.split(' ')
  if(typeof day === 'object') {
  	(day[0] === '') ? day = day[1] : (day[1] === '') ? day = day[2] : day = day[0]
  }
  if([...reason][0] === ' '){
  	reason = reason.slice(1)
  }
  reason = (reason.split(' ')[0] !== 'karena') ? 'karena '+reason : reason
  if(!day) return error()
  let who = (m.mentionedJid.length > 0) ? m.mentionedJid : toTag(number) 
  if(who.length > 0){
  	who.map(jid => {
  	    let date = new Date().getTime()
          let res = (day !== 'p') ? date + getDate(day) : -1
          reason = (typeof reason !== 'undefined') ? reason : ''
          global.users[jid].bannedDate = res
          global.users[jid].banned = true
          global.users[jid].bannedReason = `${reason}`
          day = (day !== 'p') ? ' selama '+day : ' permanen'
          conn.reply(jid.split`@`[0] + '@s.whatsapp.net', `Hai @${jid.split`@`[0]}, Kamu Telah Dibanned ${day}`, m, { mentions: [jid] }) 
          conn.reply(m.chat, `@${jid.split`@`[0]} telah dibanned${day} ${reason}`, m, { mentions: [jid] }) 
      })
  }
}
handler.help = ['ban *@tag or number|days* ( m = minutes; h = hours; d = day; p = permanen)']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.police = true
handler.fail = true
module.exports = handler

function toTag(id){
    if(/@/.test(id) === true) return id
    id = id + '@s.whatsapp.net'
    return [id]
}

function snat(teks){
	let no = parseInt(teks)
	let text = teks.split(no)[0]
	if(parseInt(text) !== 'NaN') text = teks.split(no)[1]
	let res = { no: no, text: text }
	//console.log(res) 
	return res
}

function getDate(teks){
	// m = minutes ; h = hours ; d = day
	let { no, text } = snat(teks)
	let res
	switch(text){
		case 'm':
		    res = no * 60000
		break
		case 'h':
		    res = no * 3600000
		break
		case 'd':
		    res = no * 86400000
		break
	}
	return res
}

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}