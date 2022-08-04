 const Discord = require("discord.js")
 let configg = require("../configg.js")
module.exports.run= async(client, message, args) => {
          let invite = message.guild.roles.get(configg.invite).members.size
          let register = message.guild.roles.get(configg.register).members.size
          message.channel.send(new Discord.RichEmbed()
                      .setTitle("#SORUMLU")
                       .setColor("GREEN")
                       .setThumbnail(message.guild.iconURL)
                       .setDescription(`
<:darklight:996761468068450375> __İnvite Üye:__  \`[${invite}]\`
<:darklight:996761468068450375> __Register Üye:__  \`[${register}]\`
`)
                               
                       .setTimestamp()
                       .setFooter("Code Fabulous")
                      );
  
  
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "s-say"
} 