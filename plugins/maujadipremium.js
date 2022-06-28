let handler = async (m, { conn, participants }) => {
    let user = global.db.data.users[m.sender]
  if (user.premium === true) throw `Kamu Sudah Premium!!`
await conn.sendButton(m.chat, 'Silahkan Beli Premium Di Shop Bot', '© 3S~Bot', {'button[0]': 'Shop Bot', 'row[0]': '.shopbot'}, m)
  }
       handler.help = ['maujadipremium', 'premium']
       handler.tags = ['daftar']
       handler.command = /^maujadipremium|premium$/i
                                           module.exports = handler