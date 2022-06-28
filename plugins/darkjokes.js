let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'Aenjaey',m)
}
handler.help = ['darkjokes'|'dj']
handler.tags = ['internet']
handler.command = /^(dj|darkjokes)$/i

module.exports = handler