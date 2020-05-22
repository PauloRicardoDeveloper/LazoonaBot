const Discord = require("discord.js");

exports.run = (bot, message, args, func, cmd) => {
    if (args[0] == null) {
      const erro = new Discord.MessageEmbed()
        .setTitle("Algo deu errado!")
        .setDescription("Você esqueceu de informar o que eu vou dizer! Veja abaixo, alguns exemplos de como usar o comando `Say`")
        .addField('**Sintaxe:**', 'la/say `Mensagem`')
        .addField('**Exemplos**', 'la/say `Eu sou muito fofa :3`')
        .setColor('#2A1250')
        message.channel.send(erro)
    } else if (args[0] != 0) {
        const sayMessage = (args.join(" "))
        const m = (sayMessage.replace("Sebola", `<@${message.author.id}>`).replace("sebola", `<@${message.author.id}>`))
        message.delete().catch(O_o => {});
        message.channel.send(m);
    }
}