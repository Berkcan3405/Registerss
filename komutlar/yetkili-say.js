 const Discord = require("discord.js")
 let configg = require("../configg.js")
module.exports.run= async(client, message, args) => {

  
          let kurucu = message.guild.roles.get(configg.kurucu).members.size
          let yönetici = message.guild.roles.get(configg.yönetici).members.size
          let yardımcı = message.guild.roles.get(configg.yardımcı).members.size
          let çırak = message.guild.roles.get(configg.çırak).members.size
          let vip = message.guild.roles.get(configg.vip).members.size
          let destekçi = message.guild.roles.get(configg.destekçi).members.size
          let rehber = message.guild.roles.get(configg.rehber).members.size
          let admin = message.guild.roles.get(configg.admin).members.size
          let mod = message.guild.roles.get(configg.mod).members.size
          message.channel.send(new Discord.RichEmbed()
                      .setTitle("𓇼 DARKLİGHT #ZULA  #YETKİLİ")
                       .setColor("GREEN")
                       .setThumbnail(message.guild.iconURL)
                       .setDescription(`
<:darklight:996761468068450375> __ Klan Kurucu:__  \`[${kurucu}]\`
<:darklight:996761468068450375> __ Klan Yönetici:__  \`[${yönetici}}\`
<:darklight:996761468068450375> __ Klan Yardımcı:__  \`[${yardımcı}]\`

<:darklight:996761468068450375> __ Klan Çırak:__  \`[${çırak}]\`
<:darklight:996761468068450375> __ Klan Vip:__  \`[${vip}]\`
<:darklight:996761468068450375> __ Klan Destekci:__  \`[${destekçi}]\`

<:darklight:996761468068450375> __ Rehber Üye:__  \`[${rehber}]\`
<:darklight:996761468068450375> __ Admin Üye:__  \`[${admin}]\`
<:darklight:996761468068450375> __ Moderatör Üye:__  \`[${mod}]\`
`)
                               
                       .setTimestamp()
                       .setFooter("Code Fabulous")
                      );
  
  
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "y-say"
} 