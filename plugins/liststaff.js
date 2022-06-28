let handler = async (m, { args, conn, text, usedPrefix }) => {
	let dev = global.you.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let rowner = global.rowner.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let owner = global.owner.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let police = global.police.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let mods = global.mods.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let prems = global.prems.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let helper = global.helper.map((jid, i) => `${i+1}. ${conn.getName(toJid(jid))}\n${toTag(jid)}\n`).join('\n')
	let all = dev+'\n'+rowner+'\n'+owner+'\n'+police+'\n'+mods+'\n'+prems+'\n'+helper
	
	if(!args[0]) args[0] = 'all'
	
	switch(args[0].toLowerCase()){
		case 'dev':
		    conn.reply(m.chat, `Developers Bot\n${dev}`, m, { mentions: conn.parseMention(dev)}) 
		break
		case 'rowner':
		    conn.reply(m.chat, `Real Owners Bot\n${rowner}`, m, { mentions: conn.parseMention(rowner)})
		break
		case 'owner':
		    conn.reply(m.chat, `Owners Bot\n${owner}`, m, { mentions: conn.parseMention(owner)}) 
		break
		case 'police':
		    conn.reply(m.chat, `Polices Bot\n${police}`, m, { mentions: conn.parseMention(police)}) 
		break
		case 'mods':
		    conn.reply(m.chat, `Moderators Bot\n${mods}`, m, { mentions: conn.parseMention(mods)}) 
		break
		case 'prems':
		case 'premium':
		case 'prem':
		    conn.reply(m.chat, `Premiums Bot\n${prems}`, m, { mentions: conn.parseMention(prems)}) 
		break
		case 'helper':
		    conn.reply(m.chat, `Helpers Bot\n${helper}`, m, { mentions: conn.parseMention(helper)}) 
		break
		case 'all':
		    conn.reply(m.chat, `Developers Bot\n${dev}\nReal Owners Bot\n${rowner}\nOwners Bot\n${owner}\nPolices Bot\n${police}\nModerators Bot\n${mods}\nPremiums Bot\n${prems}\nHelpers Bot\n${helper}`, m, { mentions: conn.parseMention(all) }) 
		break
	}
}
handler.help = ['liststaff <staff>']
handler.tags = ['main']
handler.command = /^liststaff$/i

module.exports = handler

function toJid(number){
	return number + '@s.whatsapp.net'
}

function toTag(number){
	if(/@/.test(number)) number = number.split`@`[0]
	return '@'+number
}

function toNumber(tag){
	if(/@s/.test(tag)) tag = tag.split`@s`[0]
	if(/@/.test(tag)) tag = tag.split`@`[1]
	return tag
}