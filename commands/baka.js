const superagent = require("snekfetch");
const Discord = require('discord.js')
const config = require("../config.json")
module.exports = {
    Comando: "baka", // Coloque no diminutivo
    help: {
        desc: "Chama a pessoa mencionada de Idiota!(baka)!",
        exemplo: config.prefix + "baka (User)",
    },
    run: (client, message, args) => {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username}, Você precisa mencionar alguém.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        var numeros = ["Eu te odeio Oniiii Chan! Baka!", "Baka!", "Onii Chan ... Baka...", "Baka!", "Baka-chan ... Eu te amo!"]
        if (!message.mentions.users.first()) return message.channel.send({
            embed: ghembed
        })
        superagent.get(`https://nekos.life/api/v2/img/baka`)
            .end((err, response) => {
                const lewdembed = new Discord.RichEmbed()
                    .setImage(response.body.url)
                    .setDescription(`${numeros[Math.round(Math.random()*numeros.length-1)]} ( ${message.mentions.users.first()} )`)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            }) // 
    }
}