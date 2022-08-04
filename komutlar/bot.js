const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('905630791118233602') && !message.member.hasPermission('SEND_MESSAGES')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
    message.react("990406881933672458")
   message.delete()
  if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('Bu komutu kullanabilmek için `Mesaj Gönder` yetkisine sahip olmalısın')
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketliyip ismini yaşını yazmalısın!').setColor("Red"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!")
   let yas = args[2];
await member.setNickname(`✵ ${isim}`)
  member.addRole("905630935658168340"); //Bot
  member.addRole("905630765910482985");
  member.removeRole("939280341343023134"); //kayıtsız
     const kanal = message.guild.channels.find(c => c.id == "986300460824670329") //Loglanacak Kanal İD Yaz
     const embed1 = new Discord.RichEmbed()
   .setDescription(`⇒ ${member.user} Seninle Beraber** \`${member.guild.memberCount}\` ⇒ Üye Oldu**`)
    .setColor("BLUE")
   .setTimestamp()
  .setThumbnail(user.avatarURL)
  let embed = new Discord.RichEmbed()
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setAuthor('','')
  .setColor("BLUE")
  .setThumbnail(user.avatarURL)
  .setDescription(`
<:darklight:996761468068450375> ⇒ **𝙱𝙾𝚃 𝙺𝙰𝚈𝙸𝚃 𝚂𝙸𝚂𝚃𝙴𝙼**

<:darklight:996761468068450375> ⇒ **𝚂𝚞𝚗𝚞𝚌𝚞 𝙺𝚒ş𝚒 𝚂𝚊𝚢ı𝚜ı  ・[${member.guild.memberCount}]・**

<:darklight:996761468068450375> ⇒ **𝙺𝚊𝚢𝚒𝚝𝚒𝚗 𝚈𝚊𝚙𝚒𝚕𝚍𝚒** ${member.user}
<:darklight:996761468068450375> ⇒ **𝚁𝚘𝚕𝚕𝚎𝚛𝚒𝚗 𝚅𝚎𝚛𝚒𝚕𝚍𝚒** ${member.user}`)
  };                                                                             
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["b","bot"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'b',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'bot isim yaş'
} 