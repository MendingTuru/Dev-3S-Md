let handler  = async (m, { conn, args, usedPrefix, command, text}) => {
	if(args[0] == 'list') {
		conn.reply(m.chat, `List lelang '/n'` + global.lelang, m) 
	}
	if(args[0] == 'set') {
	    if(!args[3]) {
	        let teks = ` ${conn.getName(m.sender)}
	        Melelang:
	          - ${args[1]}
	         Dengan Harga: ${args[2]}
	         Ketik /lelang buy`
	         let item = `${conn.getName(m.sender)} ' /n' Melelang ' /n' -${args[1]} '/n' Dengan harga ${args[2]}`
	         global.lelang.push(item)
	   } else if(!args[4]) {
	         let teks = ` ${conn.getName(m.sender)}
	         Melelang:
	            - ${agrs[1]}
	            Dengan Harga: ${args[2]}
	            Atau Barter dengan: ${args[3]}
	            Ketik /lelang buy atau /lelang barter`
	         let item = `${conn.getName(m.sender)} ' /n' Melelang ' /n' -${args[1]} '/n' Dengan harga ${args[2]} '/n' atau barter dengan ${args[3]}`
	         let bar = `${conn.getName(m.sender)} Melelang: ${args[1]} dengan barter: ${args[3]}`
	         global.lelang.push(item) 
	         global.barter.push(bar) 
	  }
   }
 }
 
 handler.help = ['lelang']
handler.tags = ['main']
handler.command = /^lelang$/i

module.exports = handler