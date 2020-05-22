const Discord = require('discord.js')

exports.run = (bot, message, args, func) => {
    let link = ('https://top.gg/bot/625374033365565465')
    const embed = new Discord.MessageEmbed()
        .setAuthor('Vote em mim!', bot.user.displayAvatarURL())
        .setDescription(`Me ajude a fazer mais servidores felizes! [Clique aqui](${link}) e vote em mim! `)
        .setColor('#2A1250')
    message.channel.send(message.author, embed)
}