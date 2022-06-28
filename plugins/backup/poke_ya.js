let handler = async (m, {conn, text}) => { 
	conn.reply(m.chat, `Mau tangkap pake apa?, list pokeball kamu ada di /pokeinv`) 
}
handler.command = /^pokeyes$/

module.exports = handler