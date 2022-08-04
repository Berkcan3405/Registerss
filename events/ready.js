const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(``)
  client.user.setActivity(`𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰`, { type: "WATCHING"});
  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
};