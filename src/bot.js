const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Reading Directories and Filtering JS Files.
const commandFolders = fs.readdirSync("./commands")
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// On Ready Event
client.on("ready", () => {
    console.log(`Bot ${client.user.tag} is ready.`);
});

// On Message Event
client.on("message", (message) => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply("ERROR: Cannot execute that command.");
    }
});

client.login(process.env.TOKEN);
