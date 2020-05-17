const Discord = require("discord.js");

exports.run = (bot, message, args, level) => {
    let question = args.slice(0).join(" ");

    if (args.length === 0)
        return message.reply('**Formato Inválido:** `k!enquete <pergunta>`')

    const embed = new Discord.RichEmbed()
        .setTitle("Uma enquete foi iniciada!")
        .setColor("#5599ff")
        .setDescription(`${question}`)
        .setFooter(`Enquete iniciada por ${message.author.username}`, `${message.author.avatarURL}`)

    message.channel.send({ embed })
        .then(msg => {
            msg.react('👍')
            msg.react('👎')
        })
        .catch(() => console.error('Falha ao reagir com emojis.'));

}