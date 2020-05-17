var config = require("../config.json");
const Discord = require("discord.js");
module.exports = {
    Comando: "ban",
    help: {
        desc: "Bane o usuário mencionado",
        exemplo: config.prefix + "k!ban @user (motivo)",
    },
    run: (bot, message, args) => {
        if (message.member.permissions.has('BAN_MEMBERS', true)) {
            let reason = args.slice(1).join(' ');
            if (message.mentions.members.size < 1) return message.reply("`Erro 401` **| Mencione o membro. Ex: k!ban @membro**");
            let memberUser = message.guild.members.get(message.mentions.users.first().id)
            if (memberUser) {
                if (!memberUser.bannable) return message.reply("`Erro 403` **| Esse Usuário não pode ser banido.**")
                if (memberUser.highestRole && message.member.highestRole) {
                    if (memberUser.highestRole.position >= message.member.highestRole.position)
                        return message.reply("`Erro 401` **| O cargo desse membro é maior que o seu. Então __você__ não pode bani-lo.**");
                }
            }
            if (!message.guild.member(message.mentions.users.first()).bannable) return message.reply("`Erro 403` **| Esse usuário não pode ser banido**")
            const motivo = reason.length >= 2 ? args.slice(1).join(' ') : "Não foi dado um motivo.";
            if (!message.mentions.users.first().bot) {
                let embed = new Discord.RichEmbed()
                    .setColor(`#602bff`)
                    .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL)
                    .setDescription("Você foi banido de " + message.guild.name).setThumbnail(message.guild.iconURL)
                    .addField("🔎 Motivo:", motivo, true)
                message.mentions.users.first().send(embed).then(function() { message.mentions.members.first().ban() }).catch(function() { message.mentions.members.first().ban() })
            }
            const logban = new Discord.RichEmbed()
                .setAuthor('✅ Sucesso!')
                .setDescription(`O usuário ${message.mentions.users.first().tag} __foi banido__ com sucesso!`)
                .addField('Usuário:', `${message.mentions.users.first().tag}`)
                .addField('Motivo:', `${motivo}`)
                .addField('Quem baniu:', `${message.author}`)
                .setColor('#ff008c')
                .setTimestamp()
            message.reply(logban)
        } else if (message.member.permissions.missing('BAN_MEMBERS', true)) {
            return message.reply('`Erro 403` **| Você não tem a permissão `BANIR_MEMBROS`, então você não pode executar esse comando.')
        }
    }
}