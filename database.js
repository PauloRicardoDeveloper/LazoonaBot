var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("YOUR_MONGODB_LOGIN", { useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    console.log('Conectado ao database!')
})

var User = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    rep: {
        type: Number,
        default: 0
    },
    comum: {
        type: Number,
        default: 0
    },
    raro: {
        type: Number,
        default: 0
    },
    epico: {
        type: Number,
        default: 0
    },
    lendario: {
        type: Number,
        default: 0
    },
    background: {
        type: String,
        default: "https://i.imgur.com/44vnLV7.jpg"
    },
    ban: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "#21befe"
    },
    frase: {
        type: String,
        default: "Digite s!sobre para escrever uma frase de perfil até com 144 caracteres."
    }
})

var Guild = new Schema({
    _id: {
        type: String
    },
    welcome: {
        type: Boolean,
        default: false
    },
    welcomechannel: {
        type: String,
        default: "Nenhum"
    },
    welcomemsg: {
        type: String,
        default: "Nenhuma"
    },
    byebye: {
        type: Boolean,
        default: false
    },
    byebyechannel: {
        type: String,
        default: "Nenhum"
    },
    byebyemsg: {
        type: String,
        default: "Nenhuma"
    },
    autorole: {
        type: Boolean,
        default: false
    },
    autoroleid: {
        type: String,
        dafault: "Nenhum"
    },
    leveis: {
        type: Boolean,
        default: true
    },
    coins: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        default: "Use s!config desc <descrição do servidor> para setar uma descrição."
    },
    box: {
        type: Boolean,
        default: true
    },
    caixa: {
        type: Boolean,
        default: false
    },
    prefixo: {
        type: String,
        default: "k!"
    },
    caixatipo: {
        type: String,
        default: "Comum"
    },
    links: {
        type: Boolean,
        default: false
    },
    invites: {
        type: Boolean,
        default: false
    },
    roleshop: {
        type: Boolean,
        default: false
    },
    wembedtitle: {
        type: String,
        default: ":wave: • Bem Vindo!"
    },
    wembedconteudo: {
        type: String,
        default: "Olá {member}, seja bem vindo ao servidor {guild}"
    },
    wembedfooter: {
        type: String,
        default: "• Kaori bot"
    },
    lembedtitle: {
        type: String,
        default: ":wave: • Até mais..."
    },
    lembedconteudo: {
        type: String,
        default: "Adeus {name}, esperamos sua volta..."
    },
    lembedfooter: {
        type: String,
        default: "• Kaori bot"
    },
})

var Roleshop = new Schema({
    _id: {
        type: String
    },
    canal: {
        type: String
    },
    cargo1: {
        type: String,
        default: "Nenhum"
    },
    cargo1preco: {
        type: Number,
        default: 0
    },
    cargo2: {
        type: String,
        default: "Nenhum"
    },
    cargo2preco: {
        type: Number,
        default: 0
    },
    cargo3: {
        type: String,
        default: "Nenhum"
    },
    cargo3preco: {
        type: Number,
        default: 0
    },
    cargo4: {
        type: String,
        default: "Nenhum"
    },
    cargo4preco: {
        type: Number,
        default: 0
    },
    cargo5: {
        type: String,
        default: "Nenhum"
    },
    cargo5preco: {
        type: Number,
        default: 0
    },
    cargo6: {
        type: String,
        default: "Nenhum"
    },
    cargo6preco: {
        type: Number,
        default: 0
    },
    cargo7: {
        type: String,
        default: "Nenhum"
    },
    cargo7preco: {
        type: Number,
        default: 0
    },
    cargo8: {
        type: String,
        default: "Nenhum"
    },
    cargo8preco: {
        type: Number,
        default: 0
    },
    cargo9: {
        type: String,
        default: "Nenhum"
    },
    cargo9preco: {
        type: Number,
        default: 0
    },
    cargo10: {
        type: String,
        default: "Nenhum"
    },
    cargo10preco: {
        type: Number,
        default: 0
    },
})

var Conv = new Schema({
    frase: {
        type: String
    },
    resposta: {
        type: String
    },
    por: {
        type: String
    },
    aprove: {
        type: Boolean,
        default: false
    }
})

var Convs = mongoose.model("Convs", Conv);
var Roleshops = mongoose.model("Roleshops", Roleshop);
var Guilds = mongoose.model("Guilds", Guild);
var Users = mongoose.model("Users", User);
exports.Convs = Convs
exports.Roleshops = Roleshops
exports.Guilds = Guilds
exports.Users = Users
