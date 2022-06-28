let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    let pokemon = global.db.data.pokerole[m.sender]
    let pokemonteam = pokemon.team
    let pokemonlist = pokemon.list
    let pokemonjumlah = pokemon.jumlah
    if(pokemon.claim == false){
    	conn.reply(m.chat, `Kamu belum memiliki Pokemon, Silahkan claim dulu`) 
        return false
    }
    let [team1, team2, team3] = pokemonteam.split(">") 
    if(pokemonjumlah == 1){
    	pokemon.tierpoke2 = '~'
        pokemon.xppoke2 = '~'
        pokemon.item2 = '~'
        team2 = '~'
        pokemon.tierpoke3 = '~'
        pokemon.xppoke3 = '~'
        pokemon.item3 = '~'
        team3 = '~'
    }
    if(pokemonjumlah == 2){
        pokemon.tierpoke3 = '~'
        pokemon.xppoke3 = '~'
        pokemon.item3 = '~'
        team3 = '~'
    }
    let su = `Hai ${global.db.data.users[m.sender].name}
          *${pokemon.nameteam}*
*Team:* ${team1}, ${team2}, ${team3}
*Item:* ${pokemon.item}

*item pokemon 1:* ${pokemon.item1}
*item pokemon 2:* ${pokemon.item2}
*item pokemon 3:* ${pokemon.item3}

*item XP 1:* ${pokemon.pokemonxp1}
*item XP 2:* ${pokemon.pokemonxp2}
*item XP 3:* ${pokemon.pokemonxp3}

*Tier Pokemon 1*: ${pokemon.tierpoke1}
*Tier Pokemon 2*: ${pokemon.tierpoke2}
*Tier Pokemon 3*: ${pokemon.tierpoke3}

*Xp Pokemon 1*: ${pokemon.xppoke1}
*Xp Pokemon 2*: ${pokemon.xppoke2}
*Xp Pokemon 3*: ${pokemon.xppoke3}`

conn.reply(m.chat, `${su}`) 
}

handler.help = ['pokeinv']
handler.tags = ['premium']
handler.command = /^p(okeinv)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
