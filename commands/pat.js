const Discord = require('discord.js'); // Pacote discord.js

exports.run = (bot, message, args, func) => {
    let pat = [
        "https://media.tenor.com/images/dc008a41a50a3e91a523ccb9a1533c40/tenor.gif",
        "https://media.tenor.com/images/8d7cdba4b7c6a04fd0c12d5f7418f920/tenor.gif",
        "https://media.tenor.com/images/68be2ce915f5073ddd61f9c945e8d9bc/tenor.gif",
        "https://media.tenor.com/images/afa1f00606ba478996b21155eda99138/tenor.gif",
        "https://media.tenor.com/images/b76ecb7e70d445e5bea70e972904be75/tenor.gif",
        "https://media.tenor.com/images/7b93d064c1549be07fd5488b70dbd2c2/tenor.gif",
        "https://media.tenor.com/images/2b176f9ab6e41b7374bc93111b541415/tenor.gif",
        "https://media.tenor.com/images/d65b7c40163ccf3b6157b3423c652599/tenor.gif",
        "https://media.tenor.com/images/66e8309488e9751fd98189976291b8bd/tenor.gif",
        "https://media.tenor.com/images/89440731dab7b31691c9e035b86c5e62/tenor.gif",
        "https://media.tenor.com/images/34fd815183118a8becc2d2521d5de55a/tenor.gif",
        "https://media.tenor.com/images/441efcb473431f9e5e92ecfd0011ae53/tenor.gif",
        "https://media.tenor.com/images/c789574b967988cf84381430b7ad50c9/tenor.gif",
        "https://media.tenor.com/images/e93b4929f5fd36b14076bce3f3d9565f/tenor.gif",
        "https://media.tenor.com/images/37e36267891a33899bb2d88232f9f637/tenor.gif",
        "https://media.tenor.com/images/69fb17b3eafe27df334f9f873473d531/tenor.gif",
        "https://media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif",
        "https://media.tenor.com/images/1ba00bc20666e44b23b9daec92a8f23f/tenor.gif",
        "https://media.tenor.com/images/35e57758b9ce57702a30c264bf07be38/tenor.gif",
        "https://media.tenor.com/images/e549c61c9bc3d8defdb0559b358b92a7/tenor.gif",
        "https://media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif",
        "https://media.tenor.com/images/65c83ca46ef116f11ddccc8479e02e1a/tenor.gif",
        "https://media.tenor.com/images/f6d68cc1120e23c9745963d2f380f094/tenor.gif",
        "https://media.tenor.com/images/1b8a17449cd0583c0eb2650b9e5e58cd/tenor.gif",
        "https://media.tenor.com/images/66e5b820d78e3159e56b53d50e257ea7/tenor.gif",
        "https://media.tenor.com/images/1a4ee2c9d4ca02fda507112ccbfc6b23/tenor.gif",
        "https://media.tenor.com/images/ccdf9101237386ed2f5b5f357a5a5481/tenor.gif",
        "https://media.tenor.com/images/c925774091e115992cba1dd879e95e6c/tenor.gif",
        "https://media.tenor.com/images/77898ac8fa3237a9e083525e36d9ec4a/tenor.gif",
        "https://media.tenor.com/images/df69ed0e1e3aadbcb71c01bd5f265059/tenor.gif",
    ]
    let patresult = Math.floor((Math.random() * pat.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFFF9AA)
            .setTitle(`${message.author.username}, Você precisa mencionar uma pessoa para dar um pat.`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFFF9AA)
            .setTitle(`${message.author.username} deu um pat em ${message.mentions.members.first().user.username}!`)
            .setImage(pat[patresult])
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
}