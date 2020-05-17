const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {
 
var ship = message.content.substring(6)
var fields = ship.split(' - ')
var s1 = fields[0];
var s2 = fields[1];
var sn = `${s1} :heart: ${s2}\n=` 
const r = Math.floor(Math.random() * 100) +1;

if(s2){
 
/* switch(r){
  case r >= 1 && r <= 10:
  var sembed = new Discord.RichEmbed()
  .setTitle(`Resultado`)
  .addField(`${r}%`, '█    \njust give up now')
  .setColor("#f243a0")
  message.channel.send(`${sn}`)
  message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 11 && r <= 20:
  var  sembed = new Discord.RichEmbed()
 .setTitle(`Resultado`)
 .addField(`${r}%`, '██    \nbetter than my non existant dad')
 .setColor("#f243a0")
 message.channel.send(`${sn}`)
 message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 21 && r <= 30:
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '███    \nthis is what I would get if I shipped myself with kirito when we first met')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 31 && r <= 40:
 var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '████    \ni would ship better with my ex body guard')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 41 &&  r <= 50:
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█████    \nmeh could be better')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
   console.log(r)
   break;
   
   case r >= 51 && r <= 60:
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█████    \nmeh could be better')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 61 && r <= 70:
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '███████    \ngreat friends')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 71 && r <= 80:
 var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '████████    \nthese should date')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 81 && r <= 90:
 var  sembed =  new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█████████    \nKEEP GOING ALMOST PERFECT')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 91 && r <= 100:
 var  sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '██████████    \nWAW PERFECT!!!')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   defualt:
   message.channel.send("something went wrong")
   console.log(r)
 } */
 
if(r >= 1 && r <= 10){
 var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█    \nApenas desista agora')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
  }

if(r >= 11 && r <= 20){
  var sembed = new Discord.RichEmbed()
 .setTitle(`Resultado`)
 .addField(`${r}%`, '██    \nSequer podem dizer que têm algum relacionamento...')
 .setColor("#f243a0")
 message.channel.send(`${sn}`)
 message.channel.send(sembed) 
  }

if(r >= 21 && r <= 30){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '███    \nNão dariam certo.')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 31 && r <= 40){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '████    \nEu shipparia mais com o ex del@')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
  }

if(r >= 41 && r <= 50){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█████    \nmeh!!! poderia ser melhor..')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  } 

if(r >= 51 && r <= 60){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '██████    \nParece bom, eu acho...')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }
 
 if(r >= 61 && r <= 70){
   var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '███████    \nSão bons amigos...')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)   
  }

if(r >= 71 && r <= 80){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '████████    \nEsses podem namorar')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 81 && r <= 90){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '█████████    \nUm casal quase perfeito :)')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 91 && r <= 100){
  var sembed = new Discord.RichEmbed()
.setTitle(`Resultado`)
.addField(`${r}%`, '██████████    \nWAW PERFEITO, QUE CASAL!!!')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  } 
 } else message.channel.send("Mencione 2 pessoas para usar o comando. Use `-` para separar a pessoa 1 da pessoa 2.")
}
