const database = require("../database.js")
const Discord = require("discord.js")

exports.run = (bot, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    if (message.member.permissions.has('MANAGE_GUILD', true)) {

        database.Guilds.findOne({
            "_id": message.guild.id
        }, function(erro, documento) {

            if (documento) {

                if (!razaou.length < 1) {

                    if (message.content.startsWith("la/despedida set")) {
                        if (!razaod.length < 1) {
                            //documento.byebyechannel = message.channel.id
                            documento.byebyemsg = message.content.replace("la/despedida set ", "");
                            documento.byebye = true;
                            documento.save();
                            const passembed = new Discord.MessageEmbed()
                                .setAuthor('✅ Sucesso!')
                                .setDescription('A mensagem de despedida foi __definida com sucesso__!')
                                .addField('**Mensagem:**', documento.byebyemsg)
                            message.reply(passembed);

                        } else {
                            const errpembed = new Discord.MessageEmbed()
                                .setAuthor('👋 • Despedida')
                                .setDescription('**Você não informou a mensagem de despedida.**')
                                .addField('**Código de erro:**', '400')
                                .addField('**Como usar:**', 'Use k!despedida set `Sua mensagem de despedida`')
                                .addField('**Exemplo**', 'k!despedida set Adeus {name}, espero que volte algum dia...')
                            message.reply(errpembed)
                        }
                    } else if (message.content.startsWith("la/despedida remove")) {
                        if (!documento.byebye) {
                            message.reply("`Erro 400` | **Não há uma message de despedida definida neste servidor!**");
                        } else {
                            documento.byebye = false
                            documento.byebyechannel = "Nenhum"
                            documento.byebyemsg = "Nenhuma"
                            documento.save()
                            message.reply("✅ **| Sucesso! A mensagem de despedida foi removida!**");
                        }
                    } else if (message.content.startsWith("la/despedida channel set")){
                  documento.byebyechannel = message.mentions.channels.first().id;
                  message.reply("Canal definido ".concat(`<@#${documento.byebyechannel}>`) )
                } else if (message.content.startsWith("la/despedida info")) {
                        if (!documento.byebye) {
                            const infonembed = new Discord.MessageEmbed()
                                .setAuthor('👋 • Despedida')
                                .setDescription('Aqui vai uma ajuda!')
                                .addField('**Como definir uma mensagem:**', 'Use k!despedida set `Sua mensagem de despedida.`')
                                .addField('**Placeholders:**', '{member} - Menciona o usuário, Exemplo: @membro\n{guild} -  fala o nome do servidor.\n{name} - fala o nome do usuário sem menciona-lo.')
                                .setColor('RANDOM')
                            message.reply(infonembed)
                        } else {
                            const infocmsg = new Discord.MessageEmbed()
                                .setAuthor('👋 • Despedida')
                                .setDescription('Aqui vai as informações sobre este módulo.')
                                .addField('**Mensagem:**', documento.byebyemsg)
                                .addField('**Canal:**', `<#${documento.byebyechannel}>`)
                                .addField('**Placeholders**', '`{member}` - Menciona o usuário, Exemplo: @membro\n`{guild}` -  fala o nome do servidor.\n`{name}` - fala o nome do usuário sem menciona-lo.')
                            message.reply(infocmsg)
                        }
                    }
                } else {
                    const helpe = new Discord.MessageEmbed()
                        .setTitle('👋 • Despedida')
                        .setDescription('Aqui vai uma ajuda sobre os comandos desse módulo.')
                        .addField('**Definir uma mensagem:**', 'k!despedida set')
                        .addField('**Remover uma mensagem:**', 'k!despedida remove')
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
                    desc: "Use l!config desc <descrição do servidor> para definir uma descrição.",
                    box: true,
                    caixa: false,
                    caixatipo: "Comum",
                    links: false,
                    invites: false,
                    roleshop: false,
                    premium: false
                })
                servidor.save()
                message.reply("**Digite o comando novamente!**");
            }
        })
    } else if (message.member.permissions.missing('MANAGE_GUILD', true)) {
        return message.reply("`Erro 403` | **Você não tem permissão para definir uma mensagem de despedida!**")
    }
} 