const Discord = require("discord.js");

exports.run = (bot, message, args, func) => {
    let amu = (message.mentions.members.first || message.author);
    let embed = new Discord.RichEmbed()
        .setAuthor(`Avatar de ${amu.nickname}`)
        .setImage(amu.user.avatarURL)
        .setFooter('Kaori Bot')
    message.channel.send(embed)
}