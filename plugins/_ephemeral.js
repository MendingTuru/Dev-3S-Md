const { proto } = require('@adiwajshing/baileys')

module.exports = {
   all(m, chatUpdate) {
    let chat = global.chats[chatUpdate.jid]
    switch (m.messageStubType) {
      case proto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING:
        if (chat.detect)
          this.sendMessage(chatUpdate.jid, +m.messageStubParameters[0] ?
            'Pesan Sementara ON' :
            'Pesan Sementara OFF'
            , 'extendedTextMessage')
        break
    }
    switch (m.mtype) {
      case 'protocolMessage':
        switch (m.msg.type) {
          case 3:
            if (m.isGroup) {
              let log = {
                key: m.key,
                content: m.msg,
                sender: m.sender
              }
              this.sendMessage(m.chat, ('BUG GROUP DETECTED!!!\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
              // this.modifyChat(m.chat, 'clear', {
              //     includeStarred: false
              // }).catch(console.error)
            }
            break
        }
        break
    }
  }
}
