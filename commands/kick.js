const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.member.permissions.has('KICK_MEMBERS', true)) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("`Erro 404` **| Não foi possível encontrar este usuário.**");
        let kReason = args.join(" ").slice(22);

        let kickEmbed = new Discord.RichEmbed()
            .setAuthor("✅ Sucesso!")
            .setDescription(`O usuário ${kUser} __foi expulso!__`)
            .setColor('RANDOM')
            .addField("Usuário expulso:", kUser)
            .addField('ID', kUser.id)
            .addField("Expulso por", `<@${message.author.id}>`)
            /*.addField("Expulso em", `${message.channel}`)
            .addField("Tempo", `${message.createdAt}`)
            .addField("Motivo", `${kReason}`);*/
        await message.guild.member(kUser).kick(kReason);
        message.channel.send(kickEmbed);
    } else if (message.member.permissions.missing('KICK_MEMBERS', true)) {
        message.reply('`Erro 403` **| Você não tem a permissão `EXPULSAR_MEMBROS`, então __não pode executar esse comando__**')
    }
}