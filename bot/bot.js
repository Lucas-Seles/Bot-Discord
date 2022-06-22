const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`sancho foi inicado com ${client.user.size} usuários`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
});

client.login(config.token);