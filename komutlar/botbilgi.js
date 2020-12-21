const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Kenas', bot.user.avatarURL)
  .addField(" Botun Sahibleri", "<@692466335526944838> ")
  .addField('<a:yildiz:768830339548053555>   Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2)) 
  .addField("<a:yildiz:768830339548053555> Çalışma süresi", seksizaman)
  .addField("<a:ses:770673530680508426>  Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:ses:770673530680508426>  Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("<a:ses:770673530680508426> Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("<a:ses:770673530680508426>  Discord.JS sürüm", "v"+Discord.version, true)
  .addField("<a:ses:770673530680508426> Ping", bot.ping+" ms", true)
  .addField('<a:mavikitap:776169353254535208>  Kütüphanesi;', `Discord.js`)
  .addField("<a:kirmizikitap:776169382823854180>  Bot Davet", " [Davet Et](https://discord.com/oauth2/authorize?client_id=776175136213958686&scope=bot&permissions=268443838)", )
  .addField("<a:kirmizikitap:776169382823854180>  Destek Sunucusu", " [Destek Sunucusu](https://discord.gg/q8P9rx6Ax5)", )
   .addField("<a:kirmizikitap:776169382823854180>  Bota Oy Ver", " [Vote](https://top.gg/bot/776175136213958686)", )
  .setImage(`https://cdn.discordapp.com/attachments/773858000234348544/779270552149426176/350kb_1.gif`) 
  return message.channel.send(istatistikler);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "Bot Bilgileri",
  usage: "botbilgi"
};