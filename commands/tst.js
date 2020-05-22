const Discord = require('discord.js'); // Pacote discord.js
const request = require('request');

exports.run = (bot, message, args, func) => {
  request('', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
}