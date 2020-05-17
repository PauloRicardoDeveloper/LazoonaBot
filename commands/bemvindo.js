const database = require("../database.js")
const Discord = require("discord.js")

exports.run = (bot, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {
                if (message.content.startsWith("k!bemvindo set")) {
                    if (!razaod.length < 1) {
                        documento.welcomechannel = message.channel.id
                        documento.welcomemsg = message.content.replace("k!bemvindo set ", "");
                        documento.welcome = true
                        documento.save()
                        const passembed = new Discord.RichEmbed()
                            .setAuthor('✅ Sucesso!')
                            .setDescription('A mensagem de boas vindas foi __definida com sucesso__!')
                            .addField('**Canal selecionado:**', `<#${documento.welcomechannel}>`)
                            .addField('**Mensagem:**', documento.welcomemsg)
                        message.reply(passembed);

                    } else {
                        const errpembed = new Discord.RichEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('**Você não informou a mensagem de despedida.**')
                            .addField('**Código de erro:**', '400')
                            .addField('**Como usar:**', 'Use k!bemvindo set `Sua mensagem de despedida`')
                            .addField('**Exemplo**', 'k!despedida set Olá {member}, seja bem vindo ao {guild}!')
                        message.reply(errpembed)
                    }
                } else if (message.content.startsWith("k!bemvindo remove")) {
                    if (!documento.welcome) {
                        message.reply("`Erro 400` | **Não há uma message de despedida definida neste servidor!**");
                    } else {
                        documento.welcome = false
                        documento.welcomechannel = "Nenhum"
                        documento.welcomemsg = "Nenhuma"
                        documento.save()
                        message.reply("✅ **| Sucesso! A mensagem de boas vindas foi removida com sucesso!**");
                    }
                } else if (message.content.startsWith("k!bemvindo info")) {
                    if (!documento.welcome) {

                        const infonembed = new Discord.RichEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('Aqui vai uma ajuda!')
                            .addField('**Como definir uma mensagem:**', 'Use k!bemvindo set `Sua mensagem de boas vindas.`')
                            .addField('**Placeholders:**', '{member} - Menciona o usuário, Exemplo: @membro\n{guild} -  fala o nome do servidor.\n{name} - fala o nome do usuário sem menciona-lo.')
                            .setColor('RANDOM')
                        message.reply(infonembed)
                    } else {

                        const infocmsg = new Discord.RichEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('Aqui vai as informações sobre este módulo.')
                            .addField('**Mensagem:**', documento.welcomemsg)
                            .addField('**Canal:**', `<#${documento.welcomechannel}>`)
                            .addField('**Placeholders**', '`{member}` - Menciona o usuário, Exemplo: @membro\n`{guild}` -  fala o nome do servidor.\n`{name}` - fala o nome do usuário sem menciona-lo.')
                        message.reply(infocmsg)
                    }

                }
            } else {

                const helpe = new Discord.RichEmbed()
                    .setTitle('👋 • Boas Vindas')
                    .setDescription('Aqui vai uma ajuda sobre os comandos desse módulo.')
                    .addField('**Definir uma mensagem:**', 'k!bemvindo set')
                    .addField('**Remover uma mensagem:**', 'k!bemvindo remove')
                    .addField('**Palceholders**', '`{member}` - Menciona o usuário, Exemplo: @membro\n`{guild}` -  fala o nome do servidor.\n`{name}` - fala o nome do usuário sem menciona-lo.')
                message.reply(helpe)
            }
        } else {
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
                desc: "Use k!config desc <descrição do servidor> para definir uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                invites: false,
                roleshop: false,
                wembedtitle: "Nenhum",
                wembedconteudo: "Nenhum",
                wembedfooter: "nenhum",
                lembedtitle: "Nenhum",
                lembedconteudo: "Nenhum",
                lembedfooter: "nenhum",
            })
            servidor.save()
            message.reply("`Erro 403`, **Digite o comando novamente!**");
        }

    })

}