var Jimp = require("jimp");
const Attachment = require("discord.js");
const fs = require("fs");
const Discord = require("discord.js");
const attatchments = require("discord.js");
exports.run = async (bot, message, args, MessageAttachment) => {
  const fishSZ = args[0];
  if (fishSZ > 5) {
    const mxErr = new Discord.MessageEmbed()
      .setTitle("Algo deu errado!")
      .setDescription(
        "Você tentou aplicar o efeito em uma escala muito alta! A escala máxima do efeito é `5`!"
      )
      .setColor("#EA6CD1");
    message.channel.send(message.author, mxErr);
    return;
  }
  if (fishSZ < 1) {
    const mxErr = new Discord.MessageEmbed()
      .setTitle("Algo deu errado!")
      .setDescription(
        "Você tentou aplicar o efeito em uma escala muito baixa! A escala mmínima do efeito é `1`!"
      )
      .setColor("#EA6CD1");
    message.channel.send(message.author, mxErr);
    return;
  }
  if (message.attachments.first([1]).length == 0) {
    const mxErr = new Discord.MessageEmbed()
      .setTitle("Algo deu errado!")
      .setDescription(
        "Você não enviou um arquivo de imagem para o efeito ser aplicado! Tente novamente enviando uma imagem!"
      )
      .setColor("#EA6CD1");
    message.channel.send(message.author, mxErr);
    return;
  }
  const image = message.attachments.first().name;
  await Jimp.read(message.attachments.first().url)
    .then(image => {
      image
        .fisheye({ r: fishSZ })
        .quality(60) // set JPEG quality
        .write("./fisheye.png"); // save
    })
    .catch(err => {
      console.error(err);
    });
  const attachment = new Discord.MessageAttachment("./fisheye.png");
  await message.channel.send(attachment);
  const path = "./fisheye.png";
  fs.unlink(path, err => {
    if (err) {
      console.error(err);
      return;
    }
});
};
