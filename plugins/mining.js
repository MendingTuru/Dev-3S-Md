function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text}) => {
	
	let chat = global.db.data.chats[m.chat]
	let user = global.db.data.users[m.sender]
	let su
	
	if (chat.mining == false) throw `Fitur ini belum diaktifkan Owner`
	if (chat.mining == true) {
		if (!text) throw `Mining apa Kak`
		if (text == 'money') {
			if (user.miningmode == true) {
				conn.reply(m.chat, `Bot Kamu Masih Dalam Proses mining Money`,m) 
				}
			if (user.miningmode == false) {
			let timeout = 3600000
			await m.reply(`Sedang Mining Money, Level kamu 1, mining selama ${(timeout / 60000).toFixed(2)} menit`,m) 
			user.miningmode = true
			su = pickRandom(['0.5', '0.5', '0.5', '1', '1','1','0','0','2','0','0','1','1','1','0.5','0.5','0.5']) 
			
			function miningModeDone() {
            user.miningmode = false;
            let a = user.money * 1 * 2
			hasil = a * su
			user.money += hasil
			conn.reply(m.chat, `Bot Selesai Mining, kamu mendapatkan ${hasil} Money Bot`,m);
			}
			setTimeout(miningModeDone, timeout) 
			}
		}
	}
}
			
handler.help = ['mining money/spin/limit/xp/dll']
handler.tags = ['main']
handler.command = /^m(ining)$/
handler.premium = true

module.exports = handler