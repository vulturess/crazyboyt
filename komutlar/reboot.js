const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.sendMessage(`<a:yuklenyor:776398699596218398>  **Bot yeniden başlatılıyor!** <a:yuklenyor:776398699596218398>  `).then(msg => {
    console.log(`BOT: <a:yuklenyor:769907137836482560> **Bot yeniden başlatılıyor!** <a:yuklenyor:769907137836482560> `);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['re'],
  permLevel: 4
};


exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
 