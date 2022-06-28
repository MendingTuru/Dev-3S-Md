let handler = async (m, { conn, participants }) => {
 m.reply('Hai')
 }
 handler.help = ['Hallo','Halo']
 handler.tags = ['main']
 
 handler.customPrefix = /Hallo|Halo$/i
 handler.command = new RegExp
 module.exports = handler