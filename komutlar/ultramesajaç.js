const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`utsK_${message.channel.id+message.guild.id}`)) {
  return message.reply(`**Bu Özellik Zaten Açık!**`)
}
  db.set(`utsK_${message.channel.id+message.guild.id}`, message.channel.id)
  message.reply(`**Başarılı! Ultra Sohbet Temizleyicisi Aktif!**`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ultratemizlikaç", "ultrasohbettemizleyicisiaç" ], 
  permLevel: 0
};

exports.help = {
  name: 'ultrasohbettemizleyiciaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
