const Discord = require('discord.js'); // Pacote discord.js

exports.run = (bot, message, args, func) => {
     let punch = [
        "https://media.tenor.com/images/f7b498a905f3e8c964ad5d97bf176e1f/tenor.gif",
        "https://media.tenor.com/images/1175cdf430e96e475d39777bced6798d/tenor.gif",
        "https://media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif",
        "https://media.tenor.com/images/b11c79cf158d8c9bd6e721676b06ad73/tenor.gif",
        "https://media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif",
        "https://media.tenor.com/images/3ee76c0871624822103216e82f0f89ca/tenor.gif",
        "https://media.tenor.com/images/359a3a05dbde06a89cdcf494ad62bb5d/tenor.gif",
        "https://media.tenor.com/images/26ed0cee60197a8329defae1f6586dd5/tenor.gif",
        "https://media.tenor.com/images/af187d245e5705592eda77b0a8c4084c/tenor.gif",
        "https://media.tenor.com/images/85210df2f720117ffab06bf3594a8414/tenor.gif",
        "https://media.tenor.com/images/2162843deef9dda23eff63dc4b32dabc/tenor.gif",
        "https://media.tenor.com/images/3da871efe9eccf6204fc3e3f3a857e26/tenor.gif",
        "https://media.tenor.com/images/27b7d87224c7f8b1d94ab992dd312753/tenor.gif",
        "https://media.tenor.com/images/eb379f98c7ced6d43a16e78dc25ae864/tenor.gif",
        "https://media.tenor.com/images/623f51eb757f0fd229f0a9c449f6c41f/tenor.gif",
        "https://media.tenor.com/images/73c0fa4dba7c7b184bd61d567774fcf4/tenor.gif",
        "https://media.tenor.com/images/4ad209191cceb7d18d2e959929dd5604/tenor.gif",
        "https://media.tenor.com/images/d30a44209f40e49e31e0f5486fabe75a/tenor.gif",
        "https://media.tenor.com/images/73ed0351fb25426087d37b5cef746212/tenor.gif",
        "https://media.tenor.com/images/7c9ae636157b8c56cb394a839e903152/tenor.gif",
        "https://media.tenor.com/images/f0e8430234e167af1adb61f2654d862b/tenor.gif",
        "https://media.tenor.com/images/c11455660f25d13a1080da37515f0804/tenor.gif",
        "https://media.tenor.com/images/c26405ea9282ff06e1c748dd5f6c4fc8/tenor.gif",
        "https://media.tenor.com/images/054d0f18e5fca682a52f520aeb2f7445/tenor.gif",
        "https://media.tenor.com/images/9ce408202d67d52b5d526fd7423901a0/tenor.gif",
        "https://media.tenor.com/images/4d90a938f78dd7071b3f1eb3f7f2b636/tenor.gif",
        "https://media.tenor.com/images/5540df0dd09125653c4be4de9c534e99/tenor.gif",
        "https://media.tenor.com/images/cd7fb73fe6f8027331a9c613394913a5/tenor.gif",
        "https://media.tenor.com/images/512f5c49da3695f7514abf8d0efaa5d4/tenor.gif",
        "https://media.tenor.com/images/f38b91341085f50dda393fbec9416f78/tenor.gif",
        "https://media.tenor.com/images/df2556abb7343a47d928d5d9738feb78/tenor.gif"
    ]
    let punchresult = Math.floor((Math.random() * punch.length));
    if (!args[0]) {
        const ghembed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle(`${message.author.username}, Você precisa mencionar alguém.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.users.first([0]).user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} deu um soco em ${message.mentions.members.first([0]).user.username}!`)
            .setImage(punch[punchresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username}, Você não pode bater em si mesmo!`)
        .setImage('https://media2.giphy.com/media/3uv5ivx6xwqze/giphy.gif')
    message.channel.send({
        embed: ghembed
    })

}