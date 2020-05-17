const Discord = require('discord.js'); // Pacote discord.js
const weather = require('weather-js'); // Pacote weather-js

module.exports.run = (bot, message, args, func, result) => {
    let mensagem = (args.join(" "))

    weather.find({ search: args.join(" "), degreeType: 'C' }, function(err, result) { // 'args.join' Ela adiciona tudo depois do tempo.
        if (err) {
            message.reply(`🔎 **| Insira uma loclização, não deixe a mensagem em branco. Tente novamente inserindo uma __localização válida__.**`)
            return;
        }
        // Mensagem para que ela informe ao comando uma localização válida
        let crases = ("`")
        if (result.length === 0) {
            message.reply(`🔎 **| Nenhum resultado foi encontrado para ${crases}${mensagem}${crases}. Tente novamente inserindo uma __localização válida__.**`) // Isso diz a ele no bate-papo par aque ele insira um local valido de busca.
            return; // Isso encerra o código para que o comando não seja executado.
        }

        // Variaveis
        var current = result[0].current; // Esta é uma variável para a parte atual da saída JSON.
        var location = result[0].location; // Esta é uma variável para a parte do local da saída JSON.

        // Descrição via EMBED para o comando ao ser digitado.
        let nuvem = (current.skytext.replace('Mostly Cloudy', 'Parcialmente Nublado').replace('Light Rain', 'Chuva Leve'))
        const embed = new Discord.RichEmbed()
            .setDescription(`**${nuvem}**`) // Este é o texto de como o clima está agora.
            .setAuthor(`Tempo em ${current.observationpoint}`) // Isso mostra a localização atual do clima.
            .setThumbnail(current.imageUrl) // Isso define a miniatura da incorporação
            .setColor(0x00AE86) // Isso define a cor da incorporação
            .addField('Fuso horário:', `GMT${location.timezone}`, true) // Este é o primeiro campo, mostra o fuso horário, e o verdadeiro significa 'inline(linha)'.
            .addField('Tipo de grau:', `°${location.degreetype}`, true) // Este é o campo que mostra o tipo de grau e está em 'inline(liha)'.
            .addField('Temperatura:', `${current.temperature} °C`, true)
            .addField('Nebulosidade:', `${current.feelslike}%`, true)
            .addField('Vento:', `${current.winddisplay}`, true)
            .addField('Umidade:', `${current.humidity}%`, true)

        // Agora é a mensagem que será enviada ao digitar o comando.
        message.channel.send({ embed });
    });
}