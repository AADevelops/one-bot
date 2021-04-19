const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
    console.log(`Bot ${client.user.tag} is ready.`);
});

client.on("message", (message) => {
    if (message.content === "testing") {
        message.channel.send("pong");
    } else if (message.content === `${process.env.PREFIX}shutdown`) {
        client.destroy();
    }
});

client.login(process.env.TOKEN);
