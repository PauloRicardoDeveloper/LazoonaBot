const Discord = require("discord.js");

exports.run = (bot, message, args, func) => {
    if (args[0] == null) {
        message.reply('`Erro 401` **| Informe o que eu irei dizer.**')
    } else if (args[0] != 0) {
        const sayMessage = (args.join(" "))
        const m = (sayMessage.replace("Sebola", `<@${message.author.id}>`).replace("sebola", `<@${message.author.id}>`))
        message.delete().catch(O_o => {});
        message.channel.send(m);
    }
}