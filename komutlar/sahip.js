const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Kenas Bot Sahip Komutları.")
    .setTimestamp()
    .addField("<a:kral:767699473526423572>  +reboot", "Botu yeniden başlatır.")
    .addField ("<a:kral:767699473526423572> +eval", "Eval komutlarını kullanır.")
     .addField("<a:kirmizikitap:776169382823854180>  Bota Oy Ver", " [Vote](https://top.gg/bot/776175136213958686)", )
    .setImage(`https://cdn.discordapp.com/attachments/773858000234348544/779270552149426176/350kb_1.gif`)
    .setFooter("Kenas | Yapımcım: DarkRonnie#0666", client.user.avatarURL)
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
  name: "sahip",
  description: "Sahip komutlarını gösterir.",
  usage: "sahip"
};
