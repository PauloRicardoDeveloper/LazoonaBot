const Discord = require("discord.js");
var moment = require("moment");

exports.run = (bot, message, args, func) => {
    let user;
    // Se o usuário menciona alguém, exiba suas estatísticas. Se eles apenas rodarem userinfo sem menções, eles mostrarão suas próprias estatísticas.
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    // Defina o membro do servidor
    const member = message.guild.member(user);
    let jogando = (user.presence.game ? user.presence.game.name : 'None')
    let jogandopt = (jogando.replace('None', 'Não está jogando nada.'))
    let statusen = (user.presence.status)
    let statuspt = (statusen.replace('dnd', '<:dndsebola:671025874941902868> Não pertubar').replace('online', '<:onlinesebola:671025874753159169> On-line').replace('idle', '<:idlesebola:671025875340230657> Ausente').replace('offline', '<:offlinesebola:671025874870730783> Off-line').replace('streaming', '<:streamingsebola:671025874727993385> Em live'))
    let cor = (user.presence.status)
    let corResolvable = (cor.replace('dnd', '#FF0000').replace('idle', '#FFFF00').replace('online', '#008000').replace('offline', '#000000'))
        //let nicken = (user.nickname)
        //let nickpt = (nicken.replace('None', 'Nenhum'))
    let aut = (`${user.username}#${user.discriminator} ${user.bot}`)
    let auth = (aut.replace('false', ' ').replace('true', '<:bot:538163542260580352>'))
        // Discord rich embed
    const embed = new Discord.RichEmbed()
        .setColor(corResolvable)
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField("🆔 **ID:**", `${user.id}`, )
        //.addField("Apelido:", `${nickpt}`, true)
        .addField("📅 **Criado em:**", `${moment.utc(user.createdAt).format('DD/MM/YYYY, HH:mm:ss')}`)
        .addField("👋 **Entrou no servidor:**", `${moment.utc(member.joinedAt).format('DD/MM/YYYY, HH:mm:ss')}`)
        .addField("👁‍🗨 **Status:**", `${statuspt}`)
        .addField("🎮 **Jogando:**", `${jogandopt}`)
        .setFooter(`Respondendo à ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({ embed });
}