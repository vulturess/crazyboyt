const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Kenas Bot Üyelerin Kullanabileceği Komutlar")
    .setTimestamp()
    .addField("<a:yildiz:768830339548053555>  +botunsahibi ", "Botun sahibini atar.")
    .addField ("<a:yildiz:768830339548053555> +istatistik ", "Botun istatistiklerini atar.")
    .addField("<a:yildiz:768830339548053555>  +davet ", "Botun davet linkini atar.")
    .addField("<a:yildiz:768830339548053555>  +say", "Sunucunun istatistiklerini atar..")
    .addField("<a:yildiz:768830339548053555>  +ping", "Botun pingini atar.")
    .addField("<a:yildiz:768830339548053555>  +afk", "Afk olursunuz.")
    .addField("<a:yildiz:768830339548053555>  +atamınsözü", "Rastgele Atatürk'ün bir sözünü atar.")
    .addField("<a:yildiz:768830339548053555>  +atasözü", "Rastgele bir Atasözü atar.")
     .addField("<a:kirmizikitap:776169382823854180>  Bota Oy Ver", " [Vote](https://top.gg/bot/776175136213958686)", )
    .setImage(`https://cdn.discordapp.com/attachments/773858000234348544/779270552149426176/350kb_1.gif`)
    .setFooter("Kenas | Yapımcım: Vultures#2021", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-genel", "yardım genel"],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Tüm komutları gösterir.",
  usage: "genel"
};
