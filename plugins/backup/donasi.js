let handler = async m => m.reply(`

*DONASI KAK*
➸ Dana : 0857-6464-1516
➸ Gopay : 0857-6464-1516
➸ Ovo : 0857-6464-1516
➸ Saweria : https://saweria.co/razenbot

(Melanggar Rules Di Ban 1 hari) 

Donasi supaya bot terus update & Aktif
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
