const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    if (message.member.permissions.has('MANAGE_ROLES', true)) {
        const mod = message.author;
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!user) return message.reply("`Erro 404` **| O usuário não foi encontrado. __Tente novamente__ mas mencione um __usuário válido__.**")
        let reason = message.content.split(" ").slice(2).join(" ");
        if (!user.roles.find(`name`, "Mutado // kaori-bot")) return message.reply('`Erro 400` **| Esse usuário não está mutado. Você não pode retirar a punição de um usuário que não está punido.** ')
        if (!reason) reason = "Não foi dado um motivo.";
        let muterole = message.guild.roles.find(`name`, "Mutado // kaori-bot");
        if (args[0] == "help") {
            message.reply("Digite: k!unmute <usuário> <motivo>");
            return;
        }
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "Mutado // kaori-bot",
                    color: "#000000",
                    permissions: []
                })
                message.guild.channels.forEach(async(channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                message.reply('`Erro ???` **| Ocorreu um erro ao criar o cargo "Muted", cheque minhas permissões e tente novamente**');
            }
        }


        let mutetime = args[1];

        await (user.removeRole(muterole.id));
        const muteembed = new Discord.RichEmbed()
            .setAuthor('✅ Sucesso!')
            .setDescription(`A punição do usuário ${user} __foi retirada__ com sucesso!`)
            .addField('**Usuário:**', `${user}`)
            .addField('**ID:**', `${user.id}`)
            .addField('**Quem retirou a punição:**', `${mod}`)
            .setColor('#ff008c')
        message.channel.send(muteembed)
    } else if (message.member.permissions.missing('MANAGE_ROLES', true)) {
        message.reply('`Erro 403` **| Você não tem a permissão `GERENCIAR_CARGOS` para executar esse comando.**')
    }
}