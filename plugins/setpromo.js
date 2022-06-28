let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
	let as = global.teks.data.promo
	if (!text) {
		as.texts = 'Tidak Ada Promo';
		conn.reply(m.chat, `Berhasil Menghapus Promo`);
		}
    if (text) {
    	as.texts = text;
        conn.reply(m.chat, `Berhasil menambah promo ${text}`);
        }
      }
      
handler.help = ['setpromo']
handler.tags = ['owner']
handler.command = /^s(etpromo)$/i
handler.owner = true
module.exports = handler