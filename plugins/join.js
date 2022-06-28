let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

global.join = []

let handler = async (m, { conn, text, args, participants }) => {
	if(!args[0]) return m.reply('Linknya?')
	let [_, code] = args[0].match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let pp = './src/avatar_contact.png'
	if(args[1] && args[1] === 'accRealOwner'){
		if(!global.join[args[2]]) return m.reply('Permintaan itu sudah habis!') 
		if(global.rowner.map(jid => jid === m.sender.split`@`[0])){
		    await conn.groupAcceptInvite(code)
		    conn.reply(args[2], 'Invite kamu di Acc Real Owner!', global.join[args[2]])
		    delete global.join[args[2]]
		    return
		}
		return m.reply('Kamu bukan Real Owner!')
	}
	if(args[1] && args[1] === 'skipRealOwner'){
		if(!global.join[args[2]]) return m.reply('Permintaan itu sudah habis!') 
		if(global.rowner.map(jid => jid === m.sender.split`@`[0])){
		    await conn.reply(args[2], 'Invite kamu tidak diterima Real Owner!', global.join[args[2]])
		    delete global.join[args[2]]
		    return
		}
		return m.reply('Kamu bukan Real Owner!')
	}
	if(m.isGroup && !global.you.includes(m.sender.split`@`[0])) return m.reply('Only Private Chat!') 
	if(!args[1]) return m.reply('Alasannya') 
	let alasan = text.split(code+' ')[1]
	global.join[m.sender] = m
    let gm = await conn.groupGetInviteInfo(code)
    let ids = (await conn.groupGetInviteInfo(code)).id
    try {
        pp = await conn.profilePictureUrl(ids)
    } catch (e) {
        console.log(e)
    }
    if(gm.participants.length < 1) return m.reply('Group Mati! Tidak ada peserta didalam group tersebut!') 
    await m.reply('Menunggu Persetujuan Real Owner') 
    await conn.sendButton('120363039892334404@g.us', `Hallo Owner
Nama: ${await conn.getName(m.sender)}
Nomor: @${m.sender.split`@`[0]}
Meminta untuk bot join grup: 
- Id: ${gm.id}
- Owner: @${gm.owner.split`@`[0]}
- Subject: ${gm.subject}
- Desc: ${gm.desc ? gm.desc.toString() : ''}
- Alasan: ${alasan}
`.trim(), '© 3S~Bot', { 'button[0]': 'Acc', 'row[0]': `.join ${args[0]} accRealOwner ${m.sender}`, 'button[1]': 'Skip', 'row[1]': `.join ${args[0]} skipRealOwner ${m.sender}`}, m, { mentions: [m.sender, gm.owner] }, 'image', pp)
}
handler.help = ['join <chat.whatsapp.com> <alasan>']
handler.tags = ['premium']
handler.command = /^join$/i
module.exports = handler
