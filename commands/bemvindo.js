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
                if (message.content.startsWith("la/bemvindo set")) {
                    if (!razaod.length < 1) {
                        let wcid = message.mentions.channels.first();
                      //  documento.welcomechannel = message.mentions.channels.id;
                        documento.welcomemsg = message.content.replace("la/bemvindo set ", "");
                        documento.welcome = true;
                        documento.save()
                        const passembed = new Discord.MessageEmbed()
                            .setAuthor('✅ Sucesso!')
                            .setDescription('A mensagem de boas vindas foi __definida com sucesso__!')
                            .addField('**Canal selecionado:**', `Nenhum, use la/bemvindo channel set`)
                            .addField('**Mensagem:**', documento.welcomemsg)
                        message.reply(passembed);

                    } else {
                        const errpembed = new Discord.MessageEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('**Você não informou a mensagem de despedida.**')
                            .addField('**Código de erro:**', '400')
                            .addField('**Como usar:**', 'Use la/bemvindo set `Sua mensagem de despedida`')
                            .addField('**Exemplo**', 'la/despedida set Olá {member}, seja bem vindo ao {guild}!')
                        message.reply(errpembed)
                    }
                } else if (message.content.startsWith("la/bemvindo remove")) {
                    if (!documento.welcome) {
                        message.reply("`Erro 400` | **Não há uma message de despedida definida neste servidor!**");
                    } else {
                        documento.welcome = false
                        documento.welcomechannel = "Nenhum"
                        documento.welcomemsg = "Nenhuma"
                        documento.save()
                        message.reply("✅ **| Sucesso! A mensagem de boas vindas foi removida com sucesso!**");
                    }
                } else if (message.content.startsWith("la/bemvindo channel set")){
                  documento.welcomechannel = message.mentions.channels.first().id;
                  message.reply("canal definido ".concat(`<#${documento.welcomechannel}>`) )
                } else if (message.content.startsWith("la/bemvindo info")) {
                    if (!documento.welcome) {

                        const infonembed = new Discord.MessageEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('Aqui vai uma ajuda!')
                            .addField('**Como definir uma mensagem:**', 'Use k!bemvindo set `Sua mensagem de boas vindas.`')
                            .addField('**Placeholders:**', '{member} - Menciona o usuário, Exemplo: @membro\n{guild} -  fala o nome do servidor.\n{name} - fala o nome do usuário sem menciona-lo.')
                            .setColor('RANDOM')
                        message.reply(infonembed)
                    } else {

                        const infocmsg = new Discord.MessageEmbed()
                            .setAuthor('👋 • Boas Vindas')
                            .setDescription('Aqui vai as informações sobre este módulo.')
                            .addField('**Mensagem:**', documento.welcomemsg)
                            .addField('**Canal:**', `<#${documento.welcomechannel}>`)
                            .addField('**Placeholders**', '`{member}` - Menciona o usuário, Exemplo: @membro\n`{guild}` -  fala o nome do servidor.\n`{name}` - fala o nome do usuário sem menciona-lo.')
                        message.reply(infocmsg)
                    }

                }
            } else {

                const helpe = new Discord.MessageEmbed()
                    .setTitle('👋 • Boas Vindas')
                    .setDescription('Aqui vai uma ajuda sobre os comandos desse módulo.')
                    .addField('**Definir uma mensagem:**', 'la/bemvindo set')
                    .addField('**Remover uma mensagem:**', 'la/bemvindo remove')
                    .addField('**Placeholders**', '`{member}` - Menciona o usuário, Exemplo: @membro\n`{guild}` -  fala o nome do servidor.\n`{name}` - fala o nome do usuário sem menciona-lo.')
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