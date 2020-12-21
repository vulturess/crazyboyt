const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Kenas Bot Eğlence Komutları.")
    .setTimestamp()          
    .addField("<a:kop:768830071473176586>  +tkm ", "Taş, kağıt ve makas oyununu oynarsınız.")
    .addField("<a:kop:768830071473176586>  +kahkaha ", "Kahkaha atarsınız.")
    .addField("<a:kop:768830071473176586>  +mcskin ", "Minecraft skininizi atar.")
    .addField("<a:kop:768830071473176586>  +adamasmaca ", "Adam asmaca oyununu oynarsınız.") 
    .addField("<a:kop:768830071473176586>  +düello ", "İstediğiniz kişiyle düello atarsınız.") 
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
  aliases: ["yardım eğlence", "yardım-eğlence", "eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Eğlence komutlarını gösterir.",
  usage: "eğlence"
};
