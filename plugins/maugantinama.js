// By Razen
let handler = async(m, { conn, text }) => {
    if (!text) throw 'Namanya?\n\n*Contoh : .maugantinama Manusia*'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const alasan = `*「 Daftar 」* _Ganti Nama_ \nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.you.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    m.reply(alasan, jid)
    m.reply('✔️Permintaan Telah Dikirim ke Owner, Silahkan tunggu') 
}
handler.help = ['maugantinama'].map(v => v + ' <nama>')
handler.tags = ['daftar']
handler.command = /^(maugantinama)$/i
handler.register = true

module.exports = handler

