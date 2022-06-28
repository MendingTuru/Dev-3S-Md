let fs = require('fs')

//(await extractImageThumb('./plugins/image/tu.jpg')).toString('base64')

let { extractImageThumb } = require('@adiwajshing/baileys')

let handler = async (m, {conn}) => {

    conn.sendMessage(m.chat, { mimetype: 'image/jpeg', image: { url: './plugins/image/hbd.jpg'}, jpegThumbnail: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=3S-Bot', fileName: 'Aww.jpg'})

}

handler.help = ['sopicod']
handler.tags = ['']
handler.command = /^sopicod$/
handler.rowner = true

module.exports = handler
