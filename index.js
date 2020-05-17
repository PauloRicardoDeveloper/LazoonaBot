const Discord = require('discord.js'); // Pacote discord.js
const bot = new Discord.Client();
const moment = require('moment');
moment.locale('pt-BR');
const Cleverbot = require("cleverbot-node");
const os = require('os-utils');
const fs = require('fs'); // Pacote FS
const config = require("./config.json");
var database = require("./database.js");
var Jimp = require("jimp");
const clbot = new Cleverbot;

function changing_status() {
    let status = [`k!help || ${bot.users.size} usuários 💖`, `k!help || ${bot.guilds.size} servidores ❤`, 'k!help || 1.15 build 4', 'k!help || Alguns comandos em manuteção.']
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}

bot.on("ready", () => {
    setInterval(changing_status, 15000);
    console.log("status definido!")
    console.log(`shard iniciada com ${bot.guilds.size} guilds e ${bot.users.size} usuários`)
});

// Configurações globais
const prefix = (config.prefix); // Este é o prefixo


//Bem-vindo no servidor
bot.on('guildMemberAdd', member => {
    bot.guilds.get('642799818015768637').channels.get('673611160716574749').send(`Novo **usuário**: ${member.user.tag}. Entrou em: ${member.guild.name}`)

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (documento.welcome) {

                var bemvindo = documento.welcomemsg
                if (member.guild.channels.get(documento.welcomechannel)) {
                    bot.guilds.get(member.guild.id).channels.get(documento.welcomechannel).send(bemvindo.replace(/{member}/g, `<@${member.user.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.user.username}`));
                } else {}

            } else {}

            if (documento.autorole) {

                var cargo = documento.autoroleid
                if (member.guild.roles.get(documento.autoroleid)) {
                    bot.guilds.get(member.guild.id).members.get(member.user.id).addRole(bot.guilds.get(member.guild.id).roles.get(cargo));
                } else {}

            } else {}

        } else {}

    })
})

//Saindo do servindor
bot.on('guildMemberRemove', member => {
        bot.guilds.get('642799818015768637').channels.get('673611160716574749').send(`-1 **usuário**: ${member.user.tag}. Saiu de: ${member.guild.name}`)
        database.Guilds.findOne({
            "_id": member.guild.id
        }, function(erro, documento) {

            if (documento) {

                if (documento.byebye) {

                    var bbbyebye = documento.byebyemsg
                    if (member.guild.channels.get(documento.byebyechannel)) {
                        bot.guilds.get(member.guild.id).channels.get(documento.byebyechannel).send(bbbyebye.replace(/{member}/g, `<@${member.user.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.user.username}`));
                    } else {}

                } else {}

            } else {}

        })
    })
    //Deletando o servidor
bot.on('guildDelete', guild => {
    bot.guilds.get('642799818015768637').channels.get('673611160716574749').send(`-1 **Servidor**: ${guild.name}`)

    database.Guilds.findOne({
        "_id": guild.id
    }, function(erro, documento) {
        if (documento) {
            if (documento.roleshop) {
                database.Roleshops.deleteOne({
                    "_id": guild.id
                }, function(erro, documento) {})
                database.Guilds.deleteOne({
                    "_id": guild.id
                }, function(erro, documento) {})
            } else {}
        } else {}
    })

})
bot.on('guildCreate', guild => {
    bot.guilds.get('642799818015768637').channels.get('673611160716574749').send(`+1 **Servidor**: ${guild.name} Dono: ${guild.owner.user.tag}`)
});
//Banindo usuario do bot
bot.on("message", message => {
    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let resposta = message.mentions.users.first() ? "Este usuário está proibido de usar qualquer comando do bot." : "Você está proibido de usar qualquer comando do bot."
    let args = message.content.slice(prefix.length).trim().split(" "); // Essa variável corta o prefixo e coloca o restante em uma matriz baseada nos espaços
    let cmd = args.shift().toLowerCase(); // Isso tira o primeiro objeto no cont array e, em seguida, coloca isso.

    if (usuario.bot) return;
    if (message.channel.type == "dm") return message.channel.send("Você não pode usar comandos aqui!");
    if (!message.content.startsWith(config.prefix)) return;

    database.Users.findOne({
        "_id": usuario.id
    }, function(erro, documento) {

        if (documento) {

            if (documento.ban) {
                var desenvolvedores = ["556639598172962818", "402215092097122317"]
                if (!desenvolvedores.includes(message.author.id)) {
                    message.reply(resposta).then((value) => {
                        setTimeout(() => {
                            value.delete();
                        }, 4000);
                    });
                } else {

                    let cmd = message.content.split(" ")[0];
                    cmd = cmd.slice(config.prefix.length);

                    let args = message.content.split(" ").slice(1);

                    try {
                        let commandFile = require(`./commands/${cmd}.js`);
                        commandFile.run(bot, message, args);
                    } catch (err) {
                        message.reply(err)
                    }
                }
            } else {

                let cmd = message.content.split(" ")[0];
                cmd = cmd.slice(config.prefix.length);

                let args = message.content.split(" ").slice(1);
                try {
                    let commandFile = require(`./commands/${cmd}.js`);
                    commandFile.run(bot, message, args);
                } catch (err) {
                    let cmdc = message.content.split(" ")[0]
                    let crases = ("`")
                    console.log(err)
                    message.channel.send(`${crases}Error: 404${crases} 🔎 **| Ops, parece que o comando __${cmdc}__ não existe!**`)
                }

            }

        } else {
            var pessoa = new database.Users({
                _id: usuario.id,
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

    })

});

bot.on("message", (message) => {

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            if (documento.ban) {} else {

                if (message.content.includes("<@!665284843554209803>")) {
                    if (message.author.bot) return;
                    message.reply("Use k!help para saber meus comandos.").then((value) => {
                        setTimeout(() => {
                            value.delete();
                        }, 5000);
                    });
                } else {
                    if (message.content.startsWith("<@665284843554209803>", 1)) {
                        if (message.author.bot) return;
                        message.reply("Use k!help para saber meus comandos.").then((value) => {
                            setTimeout(() => {
                                value.delete();
                            }, 5000);
                        });
                    }
                }

            }

        }

    })
})

//XP
var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 35)
let coinsRDM = Math.round(Math.random() * 0)

//Level
bot.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return
    let cmd = message.content.split(" ")[0];
    cmd = cmd.slice(config.prefix.length);
    let args = message.content.split(" ").slice(1);

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
});

bot.login(config.token);