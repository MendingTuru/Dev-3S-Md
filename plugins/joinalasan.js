
let handler = async (m, { conn, text }) => {
	if (!text) throw 'Silahkan Masukkan Alasan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
	conn.reply('120363039892334404@g.us', `*「 Join Alasan 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`, m)
 m.reply('✔️Alasan Telah Dikirim Ke Real Owner. Silahkan Tunggu')
       }
       handler.help = ['Join Alasan'].map(v => v + ' <Alasan>')
handler.tags = ['info']
handler.command = /^(joinalasan)$/i
                                           module.exports = handler