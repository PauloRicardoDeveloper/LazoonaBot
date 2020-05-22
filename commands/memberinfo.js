const Discord = require("discord.js");
var moment = require("moment");

exports.run = (bot, message, args, func) => {
    let usuario;
    // Se o usuário menciona alguém, exiba suas estatísticas. Se eles apenas rodarem userinfo sem menções, eles mostrarão suas próprias estatísticas.
    if (message.mentions.users.map(mentions => mentions).length == 1) {
        usuario = message.mentions.users.first([1]);
    } else {
        usuario = message.author;
    }
    // Defina o membro do servidor
    const member = message.guild.member(usuario);
    let aut = (`${usuario.username}#${usuario.discriminator} ${usuario.bot}`)
    let auth = (aut.replace('false', ' ').replace('true', '<:bot:538163542260580352>'))
        // Discord rich embed
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(usuario.displayAvatarURL({size:2048}))
        .setTitle(`Sobre ${usuario}`)
        .addField("🆔 **ID:**", `${usuario.id}`, )
        .addField("📅 **Criado em:**", `${moment.utc(usuario.createdAt).format('DD/MM/YYYY, HH:mm:ss')}`)
        .addField("👋 **Entrou no servidor:**", `${moment.utc(member.joinedAt).format('DD/MM/YYYY, HH:mm:ss')}`)
        .setFooter(`Respondendo a ${message.author.tag}`)
    message.channel.send({ embed });
}