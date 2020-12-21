const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Kenas Botun Sahibi Kimdir?")
    .setTimestamp()
    .addField(" İşte Kenas botunun sahibi: ", "<@692466335526944838>")
     .addField("<a:kirmizikitap:776169382823854180>  Bota Oy Ver", " [Vote](https://top.gg/bot/776175136213958686)", )

    .setFooter("Kenas ", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botunsahibi",
  description: "Botun sahibini gösterir.",
  usage: "botunsahibi"
};
