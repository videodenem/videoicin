const Discord = require('discord.js');
const db = require("quick.db")
const sc = require("starcode.js")
module.exports = client => {

  setInterval(() => {
var aktivite = [    
,"Coded by Star Team"
];
 var rastgeleOyun = Math.floor(Math.random() * aktivite.length);
  client.user.setActivity(aktivite[rastgeleOyun],  {type: 'PLAYING'}) 
}, 12000);
   console.log(`${client.user.username} başarıyla giriş yaptı.`);
   console.log(`Giriş tarihi: ${console.log(sc.date(client.readyAt, "tr-TR"))}`)

// Star Coders kanalına abone olmayı unutmayın.

}

// { type: 'STREAMING' ,  url: 'https://twitch.tv/.' } yayın yapıyor
 //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR