let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text}) => {

  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let txt = text.replace('@' + m.sender.split`@`[0], '').trim()

  let buttons = [
  {buttonId: 'menu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: 'grupbot', buttonText: {displayText: 'GROUP BOT'}, type: 1}
]
  const K = {
    contentText: `Halo @${who.split('@')[0]} bla bla bla`,
    footerText: `Razen Bot`, 
    buttons: buttons,
    headerType: 4,
}
  
  let teksny = conn.prepareMessageFromContent(from, {
           "listMessage": {
						"title":  `Hallo Bro`,
						"description": `List menu bot ada disini ya bro tinggal pilih`,
						"buttonText": "SELECT HERE",
						"footerText": `Undefined`,
						"listType": "SINGLE_SELECT",
						"sections": [
						{
								"title": "◉ All menu bot",
								"rows": [
									{
										"title": "all",
										"description": "\n\n_choose this if you want to use the main command_",
										"rowId": "main"
									}]},
							{
								"title": "◉ Menu ke-1",
								"rows": [
									{
										"title": "downloadmenu",
										"description": "\n\n_choose this if you want to use the downloadmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-2",
								"rows": [
									{
										"title": "convertmenu",
										"description": "\n\n_choose this if you want to use the convertmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-3",
								"rows": [
									{
										"title": "funmenu",
										"description": "\n\n_choose this if you want to use the funmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-4",
								"rows": [
									{
										"title": "makermenu",
										"description": "\n\n_choose this if you want to use the makermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-5",
								"rows": [
									{
										"title": "othermenu",
										"description": "\n\n_choose this if you want to use the othermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-6",
								"rows": [
									{
										"title": "ownermenu",
										"description": "\n\n_choose this if you want to use the ownermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-7",
								"rows": [
									{
										"title": "storagemenu",
										"description": "\n\n_choose this if you want to use the storagemenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-8",
								"rows": [
									{
										"title": "tagmenu",
										"description": "\n\n_choose this if you want to use the tagmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-9",
								"rows": [
									{
										"title": "upmenu",
										"description": "\n\n_choose this if you want to use the upmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-10",
								"rows": [
									{
										"title": "set sticker cmd",
										"description": "\n\n_choose this if you want to use the set stc cmd command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-11",
								"rows": [
									{
										"title": "gacha cecan",
										"description": "\n\n_choose this if you want to use the gachacecan command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-12",
								"rows": [
									{
										"title": "telegram sticker",
										"description": "\n\n_choose this if you want to use the telestc command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-13",
								"rows": [
									{
										"title": "nsfw menu",
										"description": "\n\n_choose this if you want to use the nsfwmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-14",
								"rows": [
									{
										"title": "asupan menu",
										"description": "\n\n_choose this if you want to use the asupan menu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-15",
								"rows": [
									{
										"title": "image effect",
										"description": "\n\n_choose this if you want to use the image effect menu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Source script bot",
								"rows": [
									{
										"title": "source code",
										"description": "\n\n_choose this if you want to know source code this bot_",
										"rowId": "source code"
									}]},
							{
								"title": "◉ Contribution",
								"rows": [
									{
										"title": "Big Thanks to",
										"description": "\n\n_choose this if you want to know anyone who contributed to this script_",
										"rowId": "0"
									}]}
						]
					}}, {})
 alpha.relayWAMessage(pi, {waitForAck: true})

conn.reply(m.chat, K, MessageType.buttonsMessage, { 
caption: 'RazenBot', 
footerText: `Undefined`,
"contextInfo": {
            text: 'Halo',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [who],
            }}) 
}
handler.help = ['newmenu']
handler.tags = ['main']
handler.command = /^newmenu$/
handler.rowner = true
handler.mods = true

module.exports = handler
