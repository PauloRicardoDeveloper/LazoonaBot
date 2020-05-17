const Discord = require('discord.js')

exports.run = (bot, message, args, func) => {
    let link = ('https://discordapp.com/api/oauth2/authorize?client_id=625374033365565465&permissions=8&scope=bot')
    const embed = new Discord.RichEmbed()
        .setAuthor('Me adicione!', bot.user.avatarURL)
        .setDescription(`Me ajude a fazer mais servidores felizes! [Clique aqui](${link}) e me adicione em seu servidor! `)
    message.reply(embed)
}