// By Razen
let handler = async(m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
  if (user.acc === true) throw `Kamu Sudah di Acc!!`
  if (user.police === true) throw `Fitur Ini Khusus Premium!!`
    if (!text) throw 'Silahkan isi nama, alasan, umur, asal kota dan lu cewe apa cowo'
        if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
            const alasan = `*「 Daftar 」* _Acc_ \nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
                for (let jid of global.you.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
                    m.reply(alasan, jid)
                        m.reply('✔️Permintaan Telah Dikirim ke Owner, Silahkan tunggu') 
                        }
                        handler.help = ['maudiacc'].map(v => v + ' <alasan>')
                        handler.tags = ['daftar']
                        handler.command = /^(maudiacc)$/i
                        handler.premium = true
                        
                        module.exports = handler
                        
                        