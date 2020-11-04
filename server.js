const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
let prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
if(msg.content.includes("maviş")) {
  msg.reply("Birisi Maviş Mi Dedi ?")
}
});

client.login(ayarlar.token);