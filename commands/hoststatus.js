const Discord = require("discord.js")
    /*RAM: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB
    CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%*/

exports.run = (bot, message, args) => {
    const status = new Discord.RichEmbed()
        .setTitle('⚙ Status do host')
        .addField('**Uso da cpu:**', `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`)
        .addField('**Ram usada:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`)
    message.reply(status)
}