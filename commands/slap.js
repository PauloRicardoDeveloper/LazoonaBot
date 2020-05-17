const Discord = require('discord.js'); // Pacote discord.js

exports.run = (bot, message, args, func) => {
    let slap = [
        "https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
        "https://media3.giphy.com/media/10Am8idu3qBYRy/giphy.gif",
        "https://media0.giphy.com/media/Zau0yrl17uzdK/giphy.gif",      
        "https://media3.giphy.com/media/iREUC7qrjN4vC/giphy.gif",
        "https://media3.giphy.com/media/XriT1FPiR1RRe/giphy.gif",
        "https://media.tenor.com/images/cd05509086b86a6d3d7be8f75ac315e7/tenor.gif",
        "https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif",
        "https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif",
        "https://media.tenor.com/images/0c63fe5edab20a7a88a4954cbb5fb213/tenor.gif",
        "https://media.tenor.com/images/57a57baa6b2b20deb81d22fbaef91d88/tenor.gif",
        "https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif",
        "https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif",
        "https://media.tenor.com/images/0e0075470c85f0546e0d0450455e77e8/tenor.gif",
        "https://media.tenor.com/images/091e0502e5fda1201ee76f5f26eea195/tenor.gif",
        "https://media.tenor.com/images/52f290cc5e4d1d6672f80e1b479a895f/tenor.gif",
        "https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif",
        "https://media.tenor.com/images/984e24c3e1c6eba448c6b5e4c360b592/tenor.gif",
        "https://media.tenor.com/images/5f29f333980601ed94c4357bdcb75652/tenor.gif",
        "https://media.tenor.com/images/a107547117e0b8f22e00a3f39c40eb2f/tenor.gif",
        "https://media.tenor.com/images/264dff5d5fa84955a733e24453ffe413/tenor.gif",
        "https://media.tenor.com/images/faf6a2058c94ffb16c5d6dfb576997eb/tenor.gif"
    ]
    let slapresult = Math.floor((Math.random() * slap.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFFF9AA)
            .setTitle(`${message.author.username}, Você precisa mencionar uma pessoa para dar um slap.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFFF9AA)
            .setTitle(`${message.author.username} deu um tapa em ${message.mentions.members.first().user.username}!`)
            .setImage(slap[slapresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFFF9AA)
        .setTitle(`${message.author.username}, você não pode fazer carinho em sí mesmo.`)
        .setImage('https://pa1.narvii.com/6791/b2406df27165335b2f70b4107eb92a14bf9c2578_hq.gif')
    message.channel.send({
        embed: ghembed
    })
  };