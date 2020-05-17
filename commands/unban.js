const Discord = require("discord.js");
module.exports.run = async (bot, message, args, con) => {
	
	var desenvolvedores = ["556639598172962818", "402215092097122317"]
	if(!desenvolvedores.includes(message.author.id))
	return message.reply("Eu não sirvo à você");
	let search = args.join(" ");
	if(!search) return message.channel.send("Digite um ID válido ou Nome");

	try {
		let bans = await message.guild.fetchBans();
		let banned = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()));
		
		if(!banned) return message.channel.send("Não foi possível encontrar o ID ou Nome.");

		await message.guild.unban(banned);

		message.channel.send(`${banned.tag} foi desbanido.`);
	} catch(e) {
		message.channel.send(`Comando Unban falhou: ${reason}`)
	}
}
