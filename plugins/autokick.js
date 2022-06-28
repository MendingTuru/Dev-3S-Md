let handler = m => m

handler.before = function (m, { conn }){
    if(m.chat == "6282184007917-1593838263@g.us"){
        if(m.sender == "6281260147607@s.whatsapp.net"){
            conn.groupRemove(m.chat, ["6281260147607@s.whatsapp.net"])
            return true
        }
    }
}

module.exports = handler