const Discord = require('discord.js'); // Pacote discord.js

exports.run = (bot, message, args, func) => {

    let nuzzle = [
        "https://media.tenor.com/images/ec5f44a6f93adfa22e36a5c78ae44cdf/tenor.gif",
        "https://media.tenor.com/images/9f733ddf31ae241a108417bcea9a01e7/tenor.gif",
        "https://media.tenor.com/images/7976624d77961c912b89eb9cb93b6181/tenor.gif",
        "https://gifimage.net/wp-content/uploads/2017/09/anime-nuzzle-gif-4.gif",
        "https://gifer.com/i/8TTP.gif",
        "https://gifer.com/i/5Kpx.gif",
        "http://gifimage.net/wp-content/uploads/2017/09/anime-nuzzle-gif-3.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/227/060/e46.gif",
        "https://i.kym-cdn.com/photos/images/original/001/178/394/3a4.gif",
        "http://gifimage.net/wp-content/uploads/2017/09/anime-nuzzle-gif-6.gif",
        "https://gifer.com/i/ByNz.gif",
        "https://gifer.com/i/WDf.gif",
        "https://media.giphy.com/media/AOmJwSo5gikAE/giphy.gif",
        "https://media.tenor.com/images/4708f2136a8555480c59378d94298cef/tenor.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_oB2BaKExFSAqJBYAJRA57MLbB26HCTztddmBNhPPiwKVVgq",
        "https://orig00.deviantart.net/6e44/f/2013/248/d/7/d7ea27f4af9dd317a86db69ec9c6f851-d6l6r9z.gif",
        "http://rs203.pbsrc.com/albums/aa315/tenisuhime/GIFs/Tamakilv.gif",
        "https://78.media.tumblr.com/2f38b0ee839927f3acb49a818785ece1/tumblr_mwr2ddk1e01s74h99o1_500.gif",
        "http://rs1225.pbsrc.com/albums/ee387/animegifss/nuzzle.gif",
        "http://gifimage.net/wp-content/uploads/2017/09/anime-nuzzle-gif-5.gif"
    ]
    let nuzzleresult = Math.floor((Math.random() * nuzzle.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username}, você precisa mencionar alguém para você se aconchegar`)
            .setImage('https://i.pinimg.com/originals/c0/30/d0/c030d09b57e4cf6b19ca8836b6590cde.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} aconchegou-se em ${message.mentions.members.first().user.username}!`)
            .setImage(nuzzle[nuzzleresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username}, VOCÊ NÃO PODE SE ACONCHEGAR SOZINHO, BAKAAAA...`)
        .setImage('https://media2.giphy.com/media/3uv5ivx6xwqze/giphy.gif')
    message.channel.send({
        embed: ghembed
    })

}