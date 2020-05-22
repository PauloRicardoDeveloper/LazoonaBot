var Jimp = require("jimp");
const Attachment = require("discord.js");
const fs = require("fs");
const Discord = require("discord.js");
const attatchment = require("discord.js");
exports.run = async (bot, message, args, MessageAttachment) => {
  const image = 'unknown';
  const str = args[0].charAt(0)
  if (args.toString().length > 18) {
    const errEmb = new Discord.MessageEmbed()
    .setTitle('Algo deu errado!')
    .setDescription('As palavras que você digitou, somaram mais que `17 caracteres`! escreva palavras menores!')
    .setColor("#EA6CD1");
    message.channel.send(message.author, errEmb);
    return;
  }
  
  let bbResol = `${str}... ${str}...`;
  let x = 11
  let y = 15
  let bb2 = args.join(' ');
  let x1 = 21;
  let y1 = 158;

  Jimp.read('https://cdn.glitch.com/8e105687-674f-4b8f-9a8b-743ee44594a6%2Funknown.png?v=1590078723968')
    .then(image => {
    Jimp.loadFont(Jimp.FONT_SANS_14_BLACK)
  .then(font => {
    image.print(font, x, y, bbResol)
    image.print(font, x1, y1, bb2)
    image
    image.write('./primeiraspalavras.png')
    const attachment = new Discord.MessageAttachment("./primeiraspalavras.png");
    message.channel.send(attachment);// save
      })
    })
    .catch(err => {
      console.error(err);
    })
}
  const path = "./primeiraspalavras.png";
  fs.unlink(path, err => {
    if (err) {
      console.error(err);
      return;
    }
  });