const discord = require('discord.js')

exports.run = (bot, message, args, func) => {
    const embed = new discord.RichEmbed()
        .setTitle('ℹ **Minhas Informações**')
        .addField('🛠 **Meus criadores**', 'Sebola#3461 e Mare#2519')
        .addField('🗜 **Versão atual**', '1.16 build 1')
        .addField('🗃 **Library**', 'Discord.js')
        .addField('📦 **Dependências**', 'discord.js, moment-js, mongoose, os-utils, weather-js')
        .addField('👥 **Usuários**', bot.users.size)
        .addField('💬 **Servidores**', bot.guilds.size)
        .setFooter('Kaori Bot © 2018-2020')
        .setColor('RANDOM')
    message.channel.send(embed)
}