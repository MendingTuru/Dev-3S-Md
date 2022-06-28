let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Provider')).buffer(), `
┌〔 Provider 〕
- AWS FREE TIER: Rp 120.000
- AZURE PAY AS YOU GO: Rp.120.000
- AZURE FREE TRIAL: Rp.75.000
- VULTR: Rp.180.000
- GOOGLE CLOUD PLATFORM: Rp.200.000

〔 wa.me/+62856-4276-5747〕
`.trim(), '© Victrius Store', 'PAYMENT', '.payment', 'TOS / RULES', '.tos', 'PROMO', '.promo', m)
handler.help = ['provider']
handler.tags = ['shop']
handler.command = /^provider$/i

module.exports = handler