let handler = m => m

handler.all = async function (m) {
    if (!db.data.settings[this.user.jid].antispam) return // antispam aktif?
    if (m.isBaileys || m.fromMe || !m.message) return
    if (db.data.users[m.sender].banned || db.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
                await this.reply(m.chat, `Kamu Telah Dibanned Karena Terdeteksi Spam!`)
                await this.sendButton(global.rowner[1], `*Spam*\n\n@${m.sender.split`@`[0]}`, wm, { 'button[0]': 'Unban', 'row[0]': '.unban ' + m.sender.split`@`[0] })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler