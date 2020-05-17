const superagent = require("snekfetch");
const Discord = require('discord.js')
const config = require("../config.json")
module.exports = {
    Comando: "hug", // Coloque no diminutivo
    help: {
        desc: "Da Um abraço na pessoa Mencionada !",
        exemplo: config.prefix + "hug (User)",
    },
    run: (client, message, args) => {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username}, Você precisa mencionar alguém.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        if (!message.mentions.users.first()) return message.channel.send({
            embed: ghembed
        })
        superagent.get(`https://nekos.life/api/v2/img/hug`)
            .end((err, response) => {
                const lewdembed = new Discord.RichEmbed()
                    .setImage(response.body.url)
                    .setDescription(`${message.author} deu um abraço em ${message.mentions.members.first().user.username}!`)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
}