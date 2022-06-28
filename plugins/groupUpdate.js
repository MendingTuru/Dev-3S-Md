let handler = async (m, { conn, participants, args }) => {
	
	//participants bug? 
	
	if(!args[0]) return conn.reply(m.chat, `Command Salah! Example: /gu promote @6283170404188`, m, { mentions: ['6283170404188@s.whatsapp.net']}) 
	if(!m.mentionedJid[0]) { 
		if(args[0] !== 'add') return conn.reply(m.chat, 'Invalid User!', m) 
	}
	async function update(action){
		let meta = await conn.groupMetadata(m.chat)
		if(action !== 'add'){
	        for(let i=0;i<Object.keys(m.mentionedJid).length;i++){
                let members = meta.participants.find(u => u.id === m.mentionedJid[i])
                switch(action){
                    case 'p':
                        if(members.admin === 'admin'){
                       	 conn.reply(m.chat, '@'+members[0].split`@`[0]+' admin?',m, { mentions: [members.id]})
                         } else {
                         	await conn.groupParticipantsUpdate(m.chat, [members.id], "promote").catch(console.log)
                             conn.reply(m.chat, '@'+members.id.split`@`[0]+' promote by @'+m.sender.split`@`[0],m, { mentions: [members.id, m.sender]}) 
                         }
                     break
                     case 'd':
                         if(members.admin === 'admin'){
                             await conn.groupParticipantsUpdate(m.chat, [members.id], "demote").catch(console.log)
                             conn.reply(m.chat, '@'+members.id.split`@`[0]+' demote by @'+m.sender.split`@`[0], m, { mentions: [members.id, m.sender]}) 
                         } else {
                             conn.reply(m.chat, '@'+members.id.split`@`[0]+' member?',m, { mentions: [members.id]})
                         }
                     break
                     case 'k':
                         if(members.id === meta.owner) {
                             conn.reply(m.chat, 'Kick SuperAdmin? @'+meta.owner.split`@`[0],m, { mentions: [meta.owner]})
                          } else {
                          	await conn.groupParticipantsUpdate(m.chat, [members.id], "remove").catch(console.log)
                              conn.reply(m.chat, '@'+members.id.split`@`[0]+' kick by @'+m.sender.split`@`[0], m, { mentions: [members.id, m.sender]})
                          }
                      break
                      default:
                          conn.reply(m.chat, 'Error', m)
                  }
              }
          } else {
          	let txt = m.text.split('add ').toString()
          	let list = txt.split(',')
              for(let i=1;i<list.length;i++){
                 let here = (await conn.onWhatsApp(list[i])).find(x => x.exists === true)
                 let jid = here ? here.jid : 'Error Jid Not Found'
                 if(/error/.test(jid)){
                 	return conn.reply(m.chat, `Nomor tidak ditemukan, ${jid}`, m) 
                 }
                 let invite = await conn.groupParticipantsUpdate(m.chat, [jid], "add")
                 conn.reply(m.chat, `Menginvite @${jid.split`@`[0]}`, m, { mentions: [jid] })
                 (!invite) ? conn.reply(m.chat, `@${jid.split`@`[0]} Gagal? Mencoba dengan invite... (Coming)`, m, { mentions: [jid, m.sender]}) : conn.reply(m.chat, `@${jid.split`@`[0]} di invite oleh @${m.sender.split`@`[0]}`, m, { mentions: [m.sender, jid]})
             }
         }
    }
	
    if('promote' === args[0] || 'admin' === args[0]) { update('p') }
    if(args[0] === 'demote') { update('d') }
    if(args[0] === 'kick') { update('k') }
    if(args[0] === 'add') { update('a') }
}
handler.help = ['gu promote @user @user', 'gu demote @user @user', 'gu kick @user @user', 'gu add number, numbet']

handler.command = /^gu$/i
handler.tags = ['admin']
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
