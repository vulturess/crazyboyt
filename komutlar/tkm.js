const
    rps = [
        'makas',
        'taş',
        'kağıt'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'taş') {
            if (botChoice === 'makas') {
                return 'won';
            } else if (botChoice === 'kağıt') {
                return 'Kaybetin! :(';
            }

            return 'draw';
        } else if (choice === 'kağıt') {
            if (botChoice === 'taş') {
                return 'won';
            } else if (botChoice === 'makas') {
                return 'Kazandın! Tebrikler';
            }

            return 'draw';
        } else if (choice === 'makas') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'kağıt') {
                return 'Kazandın! Tebrikler';
            }

            return 'draw';
        }
    };

exports.run = async (client, msg, args) => {
    if (!args[0]) {
        return msg.channel.send('**Lütfen seçimini yap** `taş, kağıt,makas` **hangisini seçeceksin?**');
    }
    let choice = args[0].toLowerCase();
    choice = choice === 't' ? 'taş' : choice;
    choice = choice === 'ts' ? 'tas' : choice;
    choice = choice === 'k' ? 'kağıt' : choice;
    choice = choice === 'm' ? 'makas' : choice;
    if (!rps.includes(choice)) {
        return msg.channel.send('Lütfen seçimini yap taş, kağıt yada makas & .tkm <t,k,m>');
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = ' Başarılı, sen **Kazandın** \nSenin Seçtiği: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`'; //Edited by Cahit and Tarık
    } else if (result === 'lost') {
        answer = 'Bir daha denemelisin, **Kaybetin Dostum**  \nSenin Seçtiğin: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`';//Edited by Cahit and Tarık (Çalananın Annesini.. xD)
    } else if (result === 'draw') {
        answer = ' Sonuç **Berabere** \nSenin Seçimin: `' + choice + '` | Bot\'un Seçimi: `' + botChoice + '`'; 
    }

    msg.channel.send(answer);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
 exports.help = {
 name: 'tkm',
 description: 'Taş kağıt makas oyununu oynar.',
 usage: 'tkm'
 }