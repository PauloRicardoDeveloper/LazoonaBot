var config = require("../config.json");
const Discord     = require("discord.js");
module.exports ={
    Comando:"ban",
    help:{
        desc:"Bane o usuário mencionado",
        exemplo:config.prefix+"ban @user (motivo)",
    },
    run:(bot,message,args) =>{
        let reason = args.slice(1).join(' ');    
        if (message.mentions.members.size < 1) return message.reply("**Mencione o Usuário!**");

        const motivo = reason.length >= 2 ? args.slice(1).join(' ') : "Não foi dado um motivo!";
    
        const embed = new Discord.RichEmbed()
        .setColor(`#602bff`)
        .setAuthor(message.mentions.users.first().username, message.mentions.users.first().displayAvatarURL)
        .setDescription("Um usuário foi banido do servidor!")
        .setThumbnail(message.mentions.users.first().displayAvatarURL)
        .addField("Staff:", `${message.author}`, true)
        .addField("Banned:", `${message.mentions.users.first().tag}`, true)
        .addField(`🔎 Motivo:`, `${motivo}`, true)
        .setImage("https://i.kym-cdn.com/photos/images/original/001/118/143/5ec.gif")
        message.channel.send(embed)
        
    }
  
}