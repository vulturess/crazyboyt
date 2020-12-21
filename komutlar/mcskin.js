const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('**Bir oyuncu adı belirtmelisin.**');
 if (mesaj == member) {
    message.reply('**Etiket değil bir kullanıcı adı girmen gerek.**')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('BLACK')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
   .setFooter(" Kenas", client.user.avatarURL)
 message.channel.send(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
 kategori: "yardım" 
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcbody <oyuncu>'
};