const Discord = require("discord.js");

exports.run = async(bot, message, args) => {
  if(!args.join(" ")) return;
  if(message.author.id == "556639598172962818"){ //ID: 1-VK, 2-Sebola
  let evaled;
    try {
      let argjoin = args.join(" ");
      evaled = await eval(argjoin);
      evaled = require('util').inspect(evaled, {depth: -1});
      message.channel.send({embed:{
        title: "EVAL",
        color: "WHITE",
        fields: [
          {
            name:"▶️ENTRADA:",
            value: "`"+argjoin+"`"
          },
          {
            name: "◀️SAÍDA:",
            value: "`"+evaled+"`"
          }
        ]
      }});
    }catch(error){
      console.log(error);
      message.reply({embed:{
        color: "RED",
        description: "🖨️ - __**Terminal**__\n`"+error+"`"
      }});
    }
    
  } else{
    message.reply("❌|**Seu nome não está na lista de desenvolvedores!**");
  }
}

module.exports.help = {
name: "eval",
aliases: ["e"]
}