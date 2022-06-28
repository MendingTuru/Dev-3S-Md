let { WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime } = require('@adiwajshing/baileys') 
		let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let poks = global.db.data.pokerole[m.sender]

if (poks.team == ' ') {
await conn.sendMessage(
    m.chat, `Hai ${this.getName(m.sender)} 
    *#Pokemon*
    _Nama Team: ${poks.namateam}_
      *Team: ${poks.team}*
      *Pokemon kamu: ${poks.list}*
     
   *#PokeBall*
       *PokeBall*: ${poks.pokeball}
       *GreatBall*: ${poks.greatball}
       *UltraBall*: ${poks.ultraball}
       *MasterBall*: ${poks.masterball}
       `, 
    { url: 'img/not.jpg' }, // send directly from local file
    MessageType.image, 
    { mimetype: Mimetype.image, caption: "Tidak Ada Pokemon!" }
) }
else if (poks.team == 'charizard') {
await conn.sendMessage(
    m.chat, `Hai ${this.getName(m.sender)} 
    *#Pokemon*
    _Nama Team: ${poks.namateam}_
      *Team: ${poks.team}*
      *Pokemon kamu: ${poks.list}
     
   *#PokeBall*
       *PokeBall*: ${poks.pokeball}
       *GreatBall*: ${poks.greatball}
       *UltraBall*: ${poks.ultraball}
       *MasterBall*: ${poks.masterball}
       `, 
    { url: 'img/charizard.jpg' }, // send directly from local file
    MessageType.image, 
    { mimetype: Mimetype.image, caption: "Charizard" }
) }
}

handler.help = ['pokeinv']
handler.tags = ['premium']

handler.command = /^pok(einv)$/i

handler.premium = true

module.exports = handler