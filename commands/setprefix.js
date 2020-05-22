var database = require("../database.js");
const Discord = require("discord.js");
exports.run = (bot, message, args, cmd) => {
  database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {
         if (documento) {
           const prefixo = message.content.split(" ")[0];
          prefixo = prefixo.slice(cmd.length);
         }
})
var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                desc: "Use k!config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                prefixo: "l/",
                invites: false,
                roleshop: false,

            })
            servidor.save()
}
