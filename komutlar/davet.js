const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const devtr = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla!")
  .setColor("#dd82fc")
  .setURL('https://discord.com/oauth2/authorize?client_id=776175136213958686&scope=bot&permissions=268443838') //Link buraya
  message.channel.send(devtr);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: 'davet',
};