const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('905630791118233602') && !message.member.hasPermission('SEND_MESSAGES')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için `Mesaj Gönder` yetkisine sahip olmalısın')
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketliyip ismini yaşını yazmalısın!').setColor("Red"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!")
   let yas = args[2];
      if(!yas) return message.channel.send("Lütfen bir yaş girin!")
await member.setNickname(`✵ ${isim} | [${yas}]`)
  member.addRole("905630928724963378"); //ERKEK
  member.addRole("953428670712799262"); //ERKEK 2
  member.removeRole("939280341343023134");//KAYITSIZ
     const kanal = message.guild.channels.find(c => c.id == "")
     const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed()
  .setColor("RED")
  .setThumbnail(user.avatarURL)
  .setDescription(`
<:darklight:996761468068450375> ⇒ **𝙴𝚁𝙺𝙴𝙺 𝙺𝙰𝚈𝙸𝚃 𝚂𝙸𝚂𝚃𝙴𝙼**

<:darklight:996761468068450375> ⇒ **𝚂𝚞𝚗𝚞𝚌𝚞 𝙺𝚒ş𝚒 𝚂𝚊𝚢ı𝚜ı  ・[${member.guild.memberCount}]・**

<:darklight:996761468068450375> ⇒ **𝙺𝚊𝚢𝚒𝚝𝚒𝚗 𝚈𝚊𝚙𝚒𝚕𝚍𝚒** ${member.user}
<:darklight:996761468068450375> ⇒ **𝚁𝚘𝚕𝚕𝚎𝚛𝚒𝚗 𝚅𝚎𝚛𝚒𝚕𝚍𝚒** ${member.user}`)
return message.channel.send(embed).then(kanal.send(embed))
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e","erkek"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'e',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'erkek isim yaş'
} 