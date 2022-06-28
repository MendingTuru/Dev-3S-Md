module.exports = {
    async all(m, mM, chatUpdate) {
        if (m.isBaileys) return
        if (!m.message) return // selectedButtonId
        //m.reply('m: '+JSON.stringify(m)) 
        //m.reply('mM: '+JSON.stringify(mM)) 
        //m.reply(''+JSON.stringify(m.message['listResponseMessage']))
        let ms = m.message //make simple su
        let type = Object.keys(ms)[0] //copy type
        if(type === 'messageContextInfo') type = Object.keys(ms)[1]
        if(type === 'undefined') return
        let msg = ms[type]
        //m.reply(''+JSON.stringify(msg)) 
        if (type == 'listResponseMessage') {
            try{
                let id = msg['singleSelectReply']['selectedRowId']
                m.sudoMessage(m.sender, m.chat, id, { parti: m.sender }) 
            } catch (e) { m.reply(''+e) }
        }
        else if (type == 'buttonsResponseMessage') {
        	try{
                let id = msg['selectedButtonId']
                m.sudoMessage(m.sender, m.chat, id, { parti: m.sender })
            } catch (e) { m.reply(''+e) }
        }
    }
}
       
            