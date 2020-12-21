const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Kenas Bot")
    .setTimestamp()
    .addField("<a:kirmiziyildiz:776160729006473247>   +eğlence ", "**Eğlence Komutlarını Atar.**")
    .addField("<a:maviyildiz:767699525372215317>   +sahip", "**Sahip Komutlarını Atar.**")
    .addField("<a:kirmiziyildiz:776160729006473247>   +genel", "**Genel Komutları Atar.**")
     .addField("<a:kirmizikitap:776169382823854180>  Bota Oy Ver", " [Vote](https://top.gg/bot/776175136213958686)", )
    .setFooter("Kenas | Yapımcım: Vultures#2021", client.user.avatarURL)
    .setImage(`https://cdn.discordapp.com/attachments/773858000234348544/779270552149426176/350kb_1.gif`)
    .setTimestamp()
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'help'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
