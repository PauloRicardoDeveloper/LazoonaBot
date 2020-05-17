module.exports ={
    Comando:"fakemsg", // Coloque no diminutivo
    help:{
        desc:"Faço uma mensagem fake do usuário mencionado!",
        exemplo:"fakemsg @user (test)",
    },
    run:(client,message,args) =>{
     var achar = client.guilds.get(message.guild.id).members.get(client.user.id)
     if  (!achar.hasPermission('ADMINISTRATOR')){ 
      if (!achar.hasPermission("MANAGE_WEBHOOKS")){
        return message.reply("**Desculpe Mas não tenho a permissao de gerenciar Webhooks!**");   
      }}
    if (message.mentions.users.size <1)return message.reply('**Mencione Alguem!**')
        let reason1 = args.slice(1).join(' ');
        if (reason1.length < 1) return message.reply('**Voce nao falou oque o bot ira dizer!**');
        var a = message.content.indexOf("@here")
        if (a > 0) return message.reply("**Sem Marcações :rage:**!")
        var b = message.content.indexOf("@everyone")
        if (b > 0) return message.reply("**Sem Marcações :rage:**!")
        var msg = args.slice(1).join(' ')
        message.channel.createWebhook(message.mentions.users.first().username,message.mentions.users.first().avatarURL).then(a =>{
        a.send(msg)
        // a.send(msg)
    setTimeout(() =>{
    a.delete()
    },5000) } )
}
}