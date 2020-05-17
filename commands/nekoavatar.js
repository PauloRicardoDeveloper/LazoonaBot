const superagent = require("snekfetch");
const Discord = require('discord.js')
const config = require("../config.json")
module.exports ={
    Comando:"rvatar", // Coloque no diminutivo
    help:{
        desc:"Envia um avatar aleatório",
        exemplo:config.prefix+"nekoavatar",
    },
    run:(client,message,args) =>{

    superagent.get(`https://nekos.life/api/v2/img/avatar`)
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setDescription(`Aqui vai um avatar Neko para você!`)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
  }
}