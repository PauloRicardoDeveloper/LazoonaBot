const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    if (message.member.permissions.has('MANAGE_ROLES', true)) {
        //!tempmute @user 1s/m/h/d


        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!tomute) return message.reply("`Erro 404` **| O usuário não foi encontrado. __Tente novamente__ mas mencione um __usuário válido__.**")
        let reason = message.content.split(" ").slice(3).join(" ");
        if (!reason) reason = "Não foi dado um motivo.";
        const mod = message.author;
        let muterole = message.guild.roles.find('name', 'Mutado // kaori-bot');
        //start of create role
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
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = args[1];
        if (!mutetime) return message.reply("`Erro 401` **| __Especifique um tempo válido__ para punir o usuário.**")

        await (tomute.addRole(muterole.id));
        const muteembed = new Discord.RichEmbed()
            .setAuthor('✅ Sucesso!')
            .setDescription(`A __punição__ do membro <@${tomute.id}> foi __aplicada__ com sucesso!`)
            .addField('**Usuário:**', `<@${tomute.id}>`)
            .addField('**ID:**', `${tomute.id}`)
            .addField('**Motivo:**', `${reason}`)
            .addField('**Tempo:**', `${ms(ms(mutetime))}`)
            .addField('**Quem puniu:**', `${mod}`)
            .setColor('#ff008c')
        message.channel.send(muteembed);
        setTimeout(function() {
            tomute.removeRole(muterole.id);
        }, ms(mutetime));
    } else if (message.member.permissions.missing('MANAGE_ROLES', true)) {
        return message.reply('`Erro 403` **| Você não tem a permissão `GERENCIAR_CARGOS`, então você não pode executar esse comando.')
    }
}