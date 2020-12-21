const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const devtr = new Discord.RichEmbed()
  .setTitle("Bota Vote Vermek İçin Tıkla!")
  .setColor("#dd82fc")
  .setURL('https://top.gg/bot/776175136213958686') //Link buraya
  message.channel.send(devtr);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyver", "vote"],
  permLevel: 0,
};
exports.help = {
  name: 'vote',
};