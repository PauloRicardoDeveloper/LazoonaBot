const Discord = require("discord.js");

exports.run = (bot, message, args, func, author) => {
    const botinfo = new Discord.RichEmbed()
        .setTitle('Sobre mim.', `${bot.user.avatarURL}`)
        .setDescription('Olá, eu sou a Kaori! Uma garota para manter seu servidor sempre organizado. Originalmente criada em JavaScript usando a Discord.js, pelo Sebola#3461 e pelo Mare#2519 com o intúito de ajudar e manter seu servidor animado e em ordem. Sou um projeto BETA, mas se você acha que eu tenho potêncial para administrar seu servidor, me indique aos seus amigos!')
        .setFooter('Kaori bot')
        .setColor('RANDOM')
    message.channel.send(botinfo)
}