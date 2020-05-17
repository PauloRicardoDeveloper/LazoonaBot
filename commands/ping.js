exports.run = async(bot, message, args, func) => {

    const m = await message.channel.send(`Ping?`);
    m.edit(`Pong! latência da API é: ${m.createdTimestamp - message.createdTimestamp}ms. A minha latência é: ${Math.round(bot.ping)}ms`);

}