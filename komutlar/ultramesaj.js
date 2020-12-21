const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`utsK_${message.channel.id+message.guild.id}`)) {
  return message.reply(`**Zaten Bu Özellik Kapalı!**`)
}
  db.delete(`utsK_${message.channel.id+message.guild.id}`)
  message.reply(`Başarılı! Ultra Sohbet Temizleyicisi Deaktif!`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ultratemizlikkapat", "ultrasohbettemizleyicisikapat"], 
  permLevel: 0
};

exports.help = {
  name: 'ultrasohbettemizleyicikapat',
  description: 'sayaç', 
  usage: 'sayaç'
};
