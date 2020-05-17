const Discord = require('discord.js'); // Pacote discord.js

exports.run = (bot, message, args, func) => {
    let kiss = [
        "https://i.imgur.com/PKOsDVW.gif",
        "https://i.imgur.com/eisk88U.gif",
        "https://i.imgur.com/9y34cfo.gif",
        "https://i.imgur.com/AncTiSt.gif",
        "https://i.imgur.com/BUJZGzg.gif",
        "https://i.imgur.com/w1AmQF7.gif",
        "https://i.imgur.com/NfksJV7.gif",
        "https://i.imgur.com/MVS1ilF.gif",
        "https://i.imgur.com/J1GHyBL.gif",
        "https://i.imgur.com/aypxaOB.gif",
        "https://i.imgur.com/JZLaOA2.gif",
        "https://i.imgur.com/COdNBUD.gif",
        "https://i.imgur.com/mJSU1bx.gif",
        "https://i.imgur.com/Ku8LeMv.gif",
        "https://i.imgur.com/PxzmuSj.gif",
        "https://i.imgur.com/4PYklTB.gif",
        "https://i.imgur.com/RwQW4j1.gif",
        "https://i.imgur.com/xXWh0Mf.gif",
        "https://i.imgur.com/2QwD7M0.gif",
        "https://i.imgur.com/JnheKgG.gif",
        "https://i.imgur.com/USWkX80.gif",
        "https://i.imgur.com/it7zZUq.gif",
        "https://i.imgur.com/UGdfJGu.gif",
        "https://i.imgur.com/knnz9dR.gif",
        "https://i.imgur.com/AGfaBJD.gif"
    
    ]
    let kissresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF9BD2)
            .setTitle(`${message.author.username}, Você precisa mencionar uma pessoa para dar um beijo.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF9BD2)
            .setTitle(`${message.author.username} deu um beijo em ${message.mentions.members.first().user.username}!`)
            .setImage(kiss[kissresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF9BD2)
        .setTitle(`${message.author.username}, você não pode dar um beijo em sí mesmo.`)
        .setImage('http://45.media.tumblr.com/dfd8465257cd6da12eabdde0bcb1fe00/tumblr_o33i85HGlE1v90u75o1_540.gif')
    message.channel.send({
        embed: ghembed
    })
}