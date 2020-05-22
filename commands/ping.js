exports.run = async(bot, message, args, func) => {

    const m = await message.channel.send(`Ping?`);
    m.edit(`Pong! Minha laência é: ${m.createdTimestamp - message.createdTimestamp}ms. A latência da api é: ${Math.round(bot.ping)}ms`);

}