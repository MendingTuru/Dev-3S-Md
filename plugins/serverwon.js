const { MessageType } = require('@adiwajshing/baileys') 
 let fetch = require('node-fetch') 
  
let handler = async (m, { conn, text}) => {
	let hasil
	if (!text) {
		conn.reply(m.chat, `Server mana
		contoh: /server play.hydrokidssmp.xyz`,m)}
	if (text == 'hydro') {
		function test() {
         alert(" <?php echo $js;
        $file = file_get_contents("http://mulqigaming.herokuapp.com/mcstatus?apikey=freeapi&ip=play.hydrokidssmp.xyz&port=19132&type=pe");
        $js = json_decode($file, true);
         ?> ");
        }
         await conn.reply(m.chat, `HydroKidsSMP
         ${test()}
          `) 
    }

else {

BigInt.prototype.toJSON = function() { return this.toString(); };

     hasil = titid.statusBedrock(`${text}`)
    .then((response) => {
         console.log(`Proses Eksekusi`) 
         console.log(response)
         let hasilNya = JSON.stringify(response, null, '»') 
         conn.reply(m.chat, `${text}
         ${hasilNya}
          `) 
    })
    .catch((error) => {
        console.error(error);
    });
    
}

}

handler.help = ['serverwon']
handler.tags = ['main']
handler.command = /^server$/i

module.exports = handler