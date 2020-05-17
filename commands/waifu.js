const superagent = require("snekfetch");
const Discord = require('discord.js')
const config = require("../config.json")
module.exports ={
    Comando:"waifu", // Coloque no diminutivo
    help:{
        desc:"Foto aleatoria de uma Waifu!",
        exemplo:config.prefix+"Waifu",
    },
    run:(client,message,args) =>{
    superagent.get(`https://nekos.life/api/v2/img/waifu`)
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setDescription(`${message.author} Estava Procurando A Waifu Perfeita ? Aqui está!`)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
  }
}