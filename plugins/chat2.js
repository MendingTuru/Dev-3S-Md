let handler = async (m, { conn, participants }) => {
	global.db.data.users[m.sender].banned = true
	global.db.data.users[m.sender].bannedPoint += 1
	conn.sendButton('120363039892334404@g.us', `*「 Toxic 」*\nOwner Ada Yang Toxic Tuh\nNomor : wa.me/${m.sender.split`@`[0]}`, wm, { 'button[0]': 'Unban', 'row[0]': '.unban ' + m.sender.split`@`[0] }, m)
 m.reply('Kamu terdeteksi Toxic dan Kamu telah di Banned\nMohon untuk menjaga ketikannya\nPerbuatan Kamu Telah Dilapor Ke Owner\n\nSilahkan Chat Real Owner Untuk Unbanned!!\n\n_*NOTE : OWNER BIASA DAN POLICE BOT DILARANG UNBAN USER TOXIC!!!*_')
       }
       handler.help = ['Bot']
       handler.customPrefix = /^Pepek|Ppek|Kontol|Kntl|Kntol|Kontl|Mmek|Memek|Bgst|Ngentod|Nudes|Nude|Milf|N u d e s|N u d e|M i l f$/i
       handler.command = new RegExp
                                           module.exports = handler