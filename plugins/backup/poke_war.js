let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let handler = async (m, { conn, text, usedPrefix}) => {
    let pokemon = global.db.data.pokerole
    let who = m.mentionedJid[0]
    let aku = pokemon[m.sender]
    let dia = pokemon[who]
    let pokename = text.replace('@' + who.split`@`[0], '').trim()
    // pokeattack @user name => 1 pokemon tim
    let power = global.db.data.pokemons[pokename]
    let reduce = pickRandom(['0.75', '0.5', '0.25']) 
    let critical = pickRandom(['1.25', '1.5', '1.75', '2.0']) 
    let hoki = pickRandom(['1', '1', '1', '1', '1.25', '1.5', '1', '1', '1', '1.75', '2', '1', '1', '1']) 
    if (power.role == 'water') {
        if (power.role == 'fire') {
            pokemon.damage += damages * critical
            pokemon.health -= pokemon.damage
            if (pokemon.health == '0') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)  
            } else if (pokemon.health < '-1') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)
                } else 
                {
                conn.reply(m.chat, `@${m.sender.split`@`[0]} menyerang @${who.split`@`[0]}
                pokename: *${pokemon.damage}*
                pokewho: *-${pokemon.damage}*`) 
                }
        }
        else if (power.role == 'plant') {
            pokemon.damage -= damages * reduce
            pokemon.health -= pokemon.damage
            if (pokemon.health == '0') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)  
            } else if (pokemon.health < '-1') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)
                } else {
                conn.reply(m.chat, `@${m.sender.split`@`[0]} menyerang @${who.split`@`[0]}
                pokename: *${pokemon.damage}*
                pokewho: *-${pokemon.damage}*`) 
                }
            }
        else {
            pokemon.damage += damages * hoki
            pokemon.health -= pokemon.damage
            if (pokemon.health == '0') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)  
            } else if (pokemon.health < '-1') {
                pokemons.tim = ' '
                conn.reply(m.chat, ` Pokemon @${who.split`@`[0]} Mati`)
                } else {
                conn.reply(m.chat, `@${m.sender.split`@`[0]} menyerang @${who.split`@`[0]}
                pokename: *${pokemon.damage}*
                pokewho: *-${pokemon.damage}*`) 
                }
            }
