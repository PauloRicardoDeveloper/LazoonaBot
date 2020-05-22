const discord = require('discord.js')
const config = require('../config.json')

exports.run = (bot, message, args, func) => {
    const embed = new discord.MessageEmbed()
        .setAuthor('Minhas Informações:')
        .addField('🛠 **Meu Repositório**', '[GitHub](https://github.com/PauloRicardoDeveloper/LazoonaBot)')
        .addField('🗜 **Versão atual**', config.version)
        .addField('🗃 **Library**', 'Discord.js')
        .addField('📦 **Dependências**', 'discord.js, moment-js, mongoose, expressjs')
        .addField('👥 **Usuários**', bot.users.cache.size)
        .addField('💬 **Servidores**', bot.guilds.cache.size)
        .setTimestamp()
        .setColor('RANDOM')
    message.channel.send(embed)
}