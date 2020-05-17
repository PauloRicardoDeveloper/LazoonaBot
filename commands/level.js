const Discord = require('discord.js')
const database = require('./database.js')

exports.run = async(bot, message, args, func, level, database) => {
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(serverro, servidorto) {
        if (servidorto) {
            if (servidorto.leveis) {
                if (xpCol.has(message.author.id)) return;
                database.Users.findOne({
                    "_id": message.author.id
                }, function(erro, documento) {
                    if (documento) {
                        if (documento.ban) {} else {
                            var unbug = 370 * documento.level + 1
                            if (documento.xp > unbug) {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.level += 1
                                const lvlupembed = new Discord.RichEmbed()
                                    .setAuthor('Level Up')
                                    .setDescription(`Parabéns ${message.author}, você acabou de subir para o level ${documento.level}!`)
                                message.reply(lvlupembed);
                                documento.xp = 0
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function() {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            } else {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function() {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            }
                        }
                    } else {
                        var pessoa = new database.Users({
                            _id: message.author.id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            rep: 0,
                            comum: 0,
                            raro: 0,
                            epico: 0,
                            lendario: 0,
                            background: "https://i.imgur.com/44vnLV7.jpg",
                            ban: false,
                            frase: "Nenhuma"
                        })

                        pessoa.save()
                    }
                });
            } else {}
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
                desc: "Use k!config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                prefixo: "k!",
                invites: false,
                roleshop: false,
                prefix: "k!",
            })

            servidor.save()
        }
    });
    let curlvl = (documento.level);
    let curxp = (documento.xp)
    const lvlembed = new Discord.RichEmbed()
        .setAuthor(`Nível de ${message.author.username}.`, `${message.author.avatarURL}`)
        .addField('**Nível**', `${curlvl}`)
        .addField('**Xp**', `${curxp}/${unbug}`)
        .setColor('RANDOM')
    message.channel.send(lvlembed)
}