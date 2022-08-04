const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

///////////
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "cik") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
//----------------------------------------Son Üye------------------------------------------\\
const bot = new Discord.Client();

var oyun = [
`✨ ERKEK-KAYIT | v-e`,
`✨ KIZ-KAYIT | v-k`,
`✨ BOT-KAYIT | v-b`,
`✨ ÖZEL-KAYIT | v-öü`,
`🌟 Prefix | v-`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 1 * 2000);
});
//----------------------------------------Bot-----------------------------------------------\\
client.on("guildMemberAdd", async member => {
  if (member.guild.id !== "901554012795568138") return;
  let channel = client.channels.get("970463525996752966");
  channel.setName("" + member.user.username);
});

//-------------------------------------LOGLAR-------------------------------------------------\\
client.on("voiceStateUpdate", async (oldState, newState) => {

  const seslog = client.channels.cache.get("961999527248801834") //KANAL ID
  if(oldState.member.user.bot || newState.member.user.bot) return;
      
  if(!oldState.channel && newState.channel) seslog.send(`⇒ 𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰  \ ${newState.member.user}  ${newState.channel} Sesli Kanala **giriş yaptı.**`)
  if(oldState.channel && !newState.channel) seslog.send(`⇒ 𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰  \ ${oldState.member.user}  \`${oldState.channel.name}\` Sesli Kanaldan **çıkış yaptı.**`)
  if(oldState.channel && newState.channel && oldState.channel !== newState.channel) seslog.send(`${newState.member.user}\  \`${oldState.channel.name}\` Sesli Kanaldan \ ${newState.channel}\` Kanala Geçiş Yaptı.**`)
  if(oldState.serverMute === false && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturuldu.**`)
  if(oldState.serverMute === true && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturulması kaldırıldı.**`)
  if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırıldı.**`)
  if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırılması kaldırıldı.**`)
  if(oldState.selfVideo === false && newState.selfVideo === true) seslog.send(`\ ${oldState.member.user} \`  **kamera yayını açtı.**`)
  
  })
//---------------------------------------Modlog---------------------------------------------------\\
//🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢   ❄️   SİLİNEN MESAJLAR LOG SİSTEMİ   ❄️

client.on("messageDelete", async message => {
if(message.member.user.bot || !message.content) return;  
let silinenmesajlar = db.fetch(`silinenmesajlarveri_${message.guild.id}`)
if(!silinenmesajlar) return;
const date = new Date();

const silinenmesajlarlog = new Discord.MessageEmbed()
.setDescription(`**BİR KULLANICI MESAJINI SİLDİ**   

**KULLANICI:** <@${message.author.id}> \``)

.setColor('RED')
.addField("**KANAL BİLGİ**:",`\ #${message.channel}\\\``)
.addField("**SİLİNEN MESAJ**:",`\`\`\`${message.content}\`\`\``)
client.channels.cache.get(silinenmesajlar).send(silinenmesajlarlog)
})

//🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
//-------------------------------------Hoş Geldin-------------------------------------------------\\
client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-999])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
          return {
            '0': `0`, // SAYI EMOJİ ID
            '1': `1`, // SAYI EMOJİ ID
            '2': `2`, // SAYI EMOJİ ID
            '3': `3`, // SAYI EMOJİ ID
            '4': `4`, // SAYI EMOJİ ID
            '5': `5`, // SAYI EMOJİ ID
            '6': `6`, // SAYI EMOJİ ID
            '7': `7`, // SAYI EMOJİ ID
            '8': `8`, // SAYI EMOJİ ID
            '9': `9`}[d];})}
    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
    }  
    let seskanal = [
    ``,
]; 
  const kanal = member.guild.channels.find(r => r.id === `939216882161057823`);
    let user = client.users.get(member.id);
    let userinfo = {};
    require("moment-duration-format");
         const kurulu2 =  moment(member.user.createdTimestamp).fromNow()    
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)
    var kontrol;
  if (kurulus < 2592000000) kontrol = ''
  if (kurulus > 2592000000) kontrol = ''
  const kurulma = new Date().getTime() - user.createdAt.getTime();
    moment.locale("tr");
    kanal.sendFileFilesCodeEmbedMessageFileFilesCodeEmbedMessage(`
     \n
    <:oks:990406881933672458>  <@`+ member + `>  Sunucumuzun [`+üyesayısı+`] Üyesisin Teşekkür Ederiz Katıldığın İçin
    
    <:oks:990406881933672458>  <@`+ member + `> Sunucumuzda Kayıt Olmak İçin İsmini Yaşını Yazmalısın
    
    <:oks:990406881933672458>  Hesabın [**`+ moment(member.user.createdTimestamp).format("LLL") +`**] Tarihinde Kurulmuştur `+kontrol+`
    
    <:oks:990406881933672458>  Sunucu kurallarımız <#905630974728110180> Kanalında Belirtilmiştir.
    
    <:oks:990406881933672458>  Yetkililerimiz Seninle İlgilenecektir! İyi Eğlenceler. <@&905630791118233602>`)});
//----------------------------------------İsim Yaş-------------------------------------------------//
client.on("guildMemberAdd", member => {
  member.setNickname('{DL} ✵ Kayıt Olunuz');
  });
//-------------------------------------Hoş Geldin-------------------------------------------------\\
// Roven Code - Roven
client.on('guildMemberAdd', member => {
    if(member.bot) return;
    client.channels.cache.get('990537693685501962').send(`<:oks:990406881933672458> Değerli  ${member}   Hoş Geldin    Sunucumuza Kanallara Tıklamalısın  
\n<:oks:990406881933672458>  <#905630996152586351>
\n<:oks:990406881933672458>  <#939593667751051337>`).then(a => a.delete({timeout: 1000000}));
});