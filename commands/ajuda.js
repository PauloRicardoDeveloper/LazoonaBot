const Discord = require("discord.js");

exports.run = (bot, message, args, func, author) => {
    const help = new Discord.RichEmbed()
        .setAuthor('Precisa de ajuda?', bot.user.avatarURL)
        .setDescription('Inclua o prefixo `k!` antes do comando.')
        //.addField('Staff', '`ban, despedida, bemvindo, kick, mute, tempmute, unban, unmute, enquete, clear`')
        .addField('Staff', '`clear, mute, unmute`')
        .addField('Diversão', '`quest, fban, fakemsg, ship`')
        .addField('Imagem', '`nekoavatar, waifu, cat, avatar`')
        .addField('Social', '`membroinfo, serverinfo`')
        .addField('Ações', '`kiss, hug, cry, slap, baka, nuzzle, pat, punch`')
        .addField('Miscelânea', '`clima, say`')
        .addField('Bot', '`ping, hoststatus, botinfo`')
        .setColor('RANDOM')
        .setFooter('Kaori bot')
    message.channel.send(help)
}
