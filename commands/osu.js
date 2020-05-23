const osu = require("node-osu-api");
const osuApi = new osu.Api("YOUR_OSU_API_KEY");
const Discord = require("discord.js");
var src;

exports.run = (bot, message, args, func, author) => {
  if (args[1] == null) {
    const nulE = new Discord.MessageEmbed()
      .setTitle("Algo deu errado!")
      .setDescription(
        "Você não informou quais informações você quer buscar. Veja abaixo uma lista de informações que você pode buscar."
      )
      .addField("**Coleções**", "map, user, best")
      .addField("**Sintaxe**", "la/osu `coleção` `Nome ou ID`")
      .setColor("#EA6CD1");
    message.channel.send(nulE);
    return;
  }
  if (message.content.startsWith("la/osu user")) {
    src = "usuário";
    osuApi.getUser({ u: args[1] }).then(user => {
      osuApi.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
      const emb = new Discord.MessageEmbed()
        .setTitle(`Perfil de ${user.username} `)
        .setDescription(`:flag_${user.country.toLowerCase()}:`)
        .addField("**ID**", `\`${user.id}\``, true)
        .addField("**Accuracy**", `\`${user.stats.accuracyFormated}\``, true)
        .addField("**Ranking Global**", `#\`${user.pp.worldRank}\``, true)
        .addField("**Vezes Jogadas**", `\`${user.stats.playcount}\``, true)
        .setThumbnail(`https://a.ppy.sh/${user.id}?1584390890.jpeg`)
        .setColor("#EA6CD1")
        .setFooter(
          "Informações por osu!api",
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
        );
      message.channel.send(emb);
      console.log(user);
    });
  }
  if (message.content.startsWith("la/osu map")) {
    osuApi.getBeatmaps({ b: args[1] }).then(beatmap => {
      if (beatmap == "") {
        const errBM = new Discord.MessageEmbed()
          .setTitle("Algo deu errado!")
          .setDescription(
            "O ID mencionado não condiz com nenhum mapa. Tente mencionar outro ID de mapa."
          )
          .setColor("#EA6CD1");
        message.channel.send(errBM);
      } else {
        const BMI = new Discord.MessageEmbed()
          .setTitle(beatmap[0].title)
          .addField("**Criador**", `\`${beatmap[0].creator}\``)
          .addField("**Artista**", `\`${beatmap[0].artist}\``)
          .addField("**Modo**", `\`${beatmap[0].mode}\``)
          .addField("**Combo Máximo**", `\`${beatmap[0].maxCombo}\``)
          .addField(
            "**Objetos**",
            `Círculos: \`${beatmap[0].objects.normal}\`, Sliders: \`${beatmap[0].objects.slider}\`, Spiners: \`${beatmap[0].objects.spinner}\``
          )
          .addField("**BPM**", `\`${beatmap[0].difficulty.bpm}\``)
          .addField(
            "**Estrelas**",
            `\`${Math.round(beatmap[0].difficulty.stars)}\``
          )
          .addField(
            "**Link**",
            `[${beatmap[0].title}](https://osu.ppy.sh/beatmapsets/${beatmap[0].beatmapSetId}#osu/${beatmap[0].id})`
          )
          .setThumbnail(
            `https://assets.ppy.sh/thumb/${beatmap[0].beatmapSetId}l.jpg`
          )
          .setColor("#EA6CD1")
          .setFooter(
            "Informações por osu!api",
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
          );
        console.log(beatmap[0].beatmapSetId)
        message.channel.send(BMI);
      }
    });
  }
  if (message.content.startsWith("la/osu best")) {
    if (args[1] == "") {
      const errLS = new Discord.MessageEmbed()
        .setTitle("Algo deu errado!")
        .setDescription(
          "Você não informou o usuário que será solicitado. Veja abaixo alguns exemplos de como ultilizar este comando."
        )
        .addField("**Sintaxe**", "la/osu last `Nome de usuário`", true)
        .addField("**Exemplo**", "la/osu last `Sebola`")
        .setColor("#EA6CD1");
      message.channel.send(errLS);
    } else {
      osuApi.getUserBest({ u: args[1] }).then(scores => {
        const rankBM = scores[0].rank;
        const rankBMR = rankBM
          .replace("X", "<:x_:712779240445182103>")
          .replace("SH", "<:sh:712779240541519892>")
          .replace("XH", "<:xh:712779240436662322>")
          .replace("S", "<:s_:712779240197849200>")
          .replace("A", "<:a_:712779239937540117>")
          .replace("B", "<:b_:712779240319484074>")
          .replace("C", "<:c_:712779240038465647>")
          .replace("D", "<:d_:712779240344518728>");
        const bstST = Math.round(scores[0].beatmap.difficulty.stars);
        const bstEM = new Discord.MessageEmbed()
          .setTitle(`Melhor partida de ${scores[0].user.username}`)
          .addField("**Beatmap**", `\`${scores[0].beatmap.title}\``)
          .addField("**Beatmap ID**", `\`${scores[0].beatmap.id}\``)
          .addField("**Dificuldade**", `\`${scores[0].beatmap.version}\``)
          .addField("**Estrelas**", `\`${bstST}\``)
          .addField("**BPM**", `\`${scores[0].beatmap.difficulty.bpm}\``)
          .addField("**Modo**", `\`${scores[0].beatmap.mode}\``)
          .addField("**Rank**", `${rankBMR}`)
          .addField("**PP**", `\`${Math.round(scores[0].pp)}\``)
          .addField(
            "**Accuracy**",
            `\`${Number(scores[0].accuracy).toFixed(2)}%\``
          )
          .addField(
            "**Hits**",
            `<:Hit300:712778651384545352> \`${scores[0].counts.count300}\`, <:hit100:712778651413905529> \`${scores[0].counts.count100}\`, <:hit50:712778651275624521> \`${scores[0].counts.count50}\`, <:hitKatu:712778651342602292> \`${scores[0].counts.countgeki}\`,  <:hitGeki:712778651762032730> \`${scores[0].counts.countkatu}\`, <:miss:712778588503670846> \`${scores[0].counts.countmiss}\``
          )
          .setColor("#EA6CD1")
          .setThumbnail(`https://a.ppy.sh/${scores[0].user.id}?1584390890.jpeg`)
          .setFooter(
            "Informações por osu!api",
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
          );
        message.channel.send(bstEM);
        //console.log(scores[0]);
      });
    }
  }
};
