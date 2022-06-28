let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix}) => {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)] }
	let pokemon = global.db.data.pokerole[m.sender]
	if(pokemon.claim == true){
		conn.reply(m.chat, `-_-`, m)
		return false
	}
	let listpoke = pickRandom(['Bulbasur | ♂️ | daun | racun >', 'Bulbasur |♀️| daun | racun >', 'Ivysaur | ♂️ | daun | racun >', 'Ivysaur |♀️| daun | racun >']) 
    pokemon.team += listpoke
    let [nama, kelamin, tipe, tipe1] = listpoke.split("|")
    let [tipe2, blank] = tipe1.split(">") 
    pokemon.claim = true
    pokemon.role = true
    pokemon.jumlah += 1
   conn.reply(m.chat, `Selamat kamu mendapatkan ${nama} dengan kelamin ${kelamin}, Tipe 1 ${tipe}, Tipe 2 ${tipe2}, hanya bisa menggunakan tipe 2 jika ${nama} kamu naik level`, m) 
}
	
handler.help = ['pokeclaim']
handler.tags = ['main']
handler.command = /^pokeclaim$/i

module.exports = handler