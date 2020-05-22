const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (
    message.mentions.members.find(member => member.id == "625374033365565465")) {
    let avatar = bot.user.displayAvatarURL({ size: 2048 });
    let msg = new Discord.MessageEmbed()
      .setAuthor(`Minha foto de perfil :3`)
      .setDescription("Ela foi feita pela etojinho#1158")
      .setImage(avatar)
      .setColor("RANDOM");
    message.channel.send(msg);
    return;
  }
  let men = message.mentions.users.first();
  if (!args[0]) {
    men = message.author;
  }
  let avatar = men.avatarURL({ size: 2048 });
  let msg = new Discord.MessageEmbed()
    .setAuthor(`Avatar de ${men.username}`)
    .setImage(avatar)
    .setColor("RANDOM");
  message.channel.send(msg);
};
