const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    const status = new Discord.MessageEmbed()
        .setTitle('⚙ Status do host')
        .addField('**Uso da cpu:**', `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`)
        .addField('**Ram usada:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`)
    message.reply(status)
}