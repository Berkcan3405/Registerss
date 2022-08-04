 const Discord = require("discord.js")
 let config = require("../config.js")
module.exports.run= async(client, message, args) => {

  
          let es = message.guild.roles.get(config.erkek).members.size
          let ks = message.guild.roles.get(config.kız).members.size
          let vp = message.guild.roles.get(config.vip).members.size
          let öü = message.guild.roles.get(config.özel).members.size
          let kas = message.guild.roles.get(config.kayıtsız).members.size
          let dl = message.guild.roles.get(config.klan).members.size

          let to = message.guild.memberCount
          let on = message.guild.members.filter(m => m.presence.status !== "offline").size
          let off = message.guild.members.filter(m => m.presence.status === "offline").size
        const voiceChannels = message.guild.channels.filter(c => c.type === "voice"); 
          let count = 0; for (const [id, voiceChannel] of voiceChannels) 
            count += voiceChannel.members.size
          
          message.channel.send(new Discord.RichEmbed()
                        .setTitle("𓇼 DARKLİGHT #ZULA #ÜYE")
                       .setColor("GREEN")
                       .setThumbnail(message.guild.iconURL)
                       .setDescription(`
<:darklight:996761468068450375> __ Erkek Üye:__  \`[${es}]\`
<:darklight:996761468068450375> __ Kız Üye:__  \`[${ks}]\`
<:darklight:996761468068450375> __ Vip Üye:__  \`[${vp}]\`
<:darklight:996761468068450375> __ Özel Üye:__  \`[${öü}]\`
<:darklight:996761468068450375> __ Kayıtsız Üye:__  \`[${kas}]\`
<:darklight:996761468068450375> __ Klan Üye:__  \`[${dl}]\``)                               
                       .setTimestamp()
                       .setFooter("Code Fabulous")
                      );
  
  
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "say"
} 