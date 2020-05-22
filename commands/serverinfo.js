const Discord = require("discord.js");
var moment = require("moment");

exports.run = (bot, message, args, func, member) => {

    let online = message.guild.members.filter(member => member.user.presence.status === 'online');
    let offline = message.guild.members.filter(member => member.user.presence.status === 'offline');
    let ausente = message.guild.members.filter(member => member.user.presence.status === 'idle');
    let dnd = message.guild.members.filter(member => member.user.presence.status === 'dnd');
    let streaming = message.guild.members.filter(member => member.user.presence.status === 'streaming');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    let crases = ("`")
    let serverembed = new Discord.Message()
        .setAuthor(`Sobre ${message.guild.name}`, sicon)
        .setFooter(`Respondendo a ${message.author.username}`)
        .setColor("#7289DA")
        .setThumbnail(sicon)
        .addField("🧾**Nome**", message.guild.name, true)
        .addField("👑**Dono**", message.guild.owner.user.tag, true)
        .addField("🆔**ID**", `${crases}${message.guild.id}${crases}`, true)
        .addField("🌎**Região**", message.guild.region.replace('brazil', 'Brasil'), true)
        .addField("💬**Salas**", `${crases}${message.guild.channels.size}${crases}`, true)
        .addField('📅**Criado em:**', `${day}/${month}/${year}`, true)
        .addField("**👥Contagem de membros:**", `Humanos: ${crases}${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}${crases}\nBots: ${crases}${message.guild.members.filter(m => m.user.bot).size}${crases}\nMembros totais: ${crases}${message.guild.memberCount}${crases}`, true)
        .addField("👥**Status de membros:**", `<:onlinesebola:671025874753159169> Online: ${crases}${online.size}${crases}\n<:offlinesebola:671025874870730783> Offline: ${crases}${offline.size}${crases}\n<:idlesebola:671025875340230657> Ausente: ${crases}${ausente.size}${crases}\n<:dndsebola:671025874941902868> Não Perturbar: ${crases}${dnd.size}${crases}\n<:streamingsebola:671025874727993385> Em Live: ${crases}${streaming.size}${crases}`, true)
    message.channel.send(serverembed);

}