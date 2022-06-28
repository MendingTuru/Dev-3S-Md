/**const fetch = require('node-fetch') 
var requestOptions = {
  method: 'GET', 
  redirect: 'follow'
};

var settings = {
  "url": "https://api.myquran.com/v1/tafsir/quran/kemenag/id/1",
  "method": "GET", 
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

fetch("https://api.myquran.com/v1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
handler.help = ['surah']
handler.tags = ['quran', 'islami']
handler.command = /^(surah?)$/i
module.exports = handler */