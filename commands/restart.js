const Discord = require("discord.js");

exports.run = (bot, message, args, func) => {

    var desenvolvedores = ["402215092097122317", "556639598172962818"]

    if (!desenvolvedores.includes(message.author.id))
        return message.reply("`Error 403`, ⛔ **ACESSO NEGADO**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        let cr = ("`")
        return message.channel.send(`${cr}Error 404${cr}, Fale o nome do arquivo valido, o arquivo ${args[0]}.js não existe!`);
    }

    message.channel.send(`**Comando reiniciado com sucesso:** ${args[0]}.js`);

}