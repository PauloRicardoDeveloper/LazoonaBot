const Discord = require("discord.js");

module.exports.run = async(bot, message, args, func) => {
    var eightball = [
        "sim..",
        "não...",
        "talvez",
        "provavelmente",
        "acho que não, heim...",
        "nunca!",
        "você pode tentar...",
        "você decide!",
        "só posso dizer que o mare eh gaykkkkkkkkk"
    ]
    if (args[0] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]);
    else message.channel.send("Qual sua pergunta?  (forma de usar: se!quest [pergunta])");

}