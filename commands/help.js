const Discord = require("discord.js");

exports.run = (bot, message, args, func, author) => {
    const help = new Discord.RichEmbed()
        .setAuthor('Precisa de ajuda?', bot.user.avatarURL)
        .setDescription('Inclua o prefixo `k!` antes do comando.')
        .addField('Staff', '`clear, mute, unmute, bemvindo, despedida, kick, ban, unban, unmute, tempmute, clear`')
        .addField('Diversão', '`quest, fban, fakemsg, ship`')
        .addField('Imagem', '`nekoavatar, waifu, avatar`')
        .addField('Social', '`memberinfo, serverinfo`')
        .addField('Ações', '`kiss, hug, slap, baka, nuzzle, pat, punch`')
        .addField('Miscelânea', '`clima, say, enquete`')
        .addField('Bot', '`ping, hoststatus, botinfo, botstats, invite`')
        .setColor('RANDOM')
        .setFooter('Kaori bot')
    message.channel.send(help)
}