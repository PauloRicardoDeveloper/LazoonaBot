const Discord = require("discord.js");
const ms = require("ms");

exports.run = async(bot, message, args) => {

    if (message.member.permissions.has('MANAGE_ROLES', true)) {
        const mod = message.author;
        let user = message.guild.members.cache.find(member => message.mentions.members.first([1])) || message.guild.members.cache.get(args[0]);
        if (!user) return message.reply("`Erro 404` **| O usuário não foi encontrado. __Tente novamente__ mas mencione um __usuário válido__.**")
        let reason = message.content.split(" ").slice(2).join(" ");
        if (!reason) reason = "Não foi dado um motivo!";
        let muterole = message.guild.roles.cache.find(role => role.name == "Membro Silenciado");
        if (args[0] == "help") {
            message.reply("Digite: la/mute <usuario> <motivo>");
            return;
        }
        if (!muterole) {
            try {
                muterole = await message.guild.roles.create({
                    name: "Membro Silenciado",
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
                console.log(e.code);
            }
        }

        let mutetime = args[1];

        let mutedavatar = (bot.user.avatarURL)

        await (user.addRole(muterole.id));
        const muteembed = new Discord.MessageEmbed()
            .setAuthor('✅ Sucesso!')
            .setDescription(`O usuário ${user} foi mutado com sucesso!`)
            .addField('**Usuário:**', `${user}`)
            .addField('**ID:**', `${user.id}`)
            .addField('**Motivo:**', `${reason}`)
            .addField('**Quem puniu:**', `${mod}`)
            .setColor('#ff008c')
        message.channel.send(muteembed)
    } else if (message.member.permissions.missing('MANAGE_ROLES', true)) {
        message.reply('`Erro 403` **| Você não tem a permissão `GERENCIAR_CARGOS` para executar esse comando.**')
    }
}