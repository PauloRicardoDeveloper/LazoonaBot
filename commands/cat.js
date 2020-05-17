const Discord = require("discord.js");

const superagent = require("superagent");


module.exports.run = async(client, message, args) => {

        
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/cat`);

        
    message.channel.send("Aqui vai um gato!", { file: body.file })

}