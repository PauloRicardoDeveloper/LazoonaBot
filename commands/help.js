const Discord = require("discord.js");
const ajuda = require("../ajuda.json")
exports.run = (bot, message, args, func, author) => {
    const help = new Discord.MessageEmbed()
        .setAuthor('Precisa de ajuda?', bot.user.avatarURL)
        .setDescription('Inclua o prefixo \`la/\` antes do comando.')
        .addField('Staff', `\`${ajuda.staff}\``, false)
        .addField('Social', `\`${ajuda.social}\``, false)
        .addField('Ações', `\`${ajuda.acoes}\``, false)
        .addField('Miscelânea', `\`${ajuda.misc}\``, false)
        .addField('Bot', `\`${ajuda.bot}\``, false)
        .addField('Imagem', `\`${ajuda.img}\``, false)
        .addField('Osu (Ainda em testes)', `\`${ajuda.osu}\``, false)
        .setColor('#2A1250')
        .setFooter('Lazoona')
    message.channel.send(help)
}