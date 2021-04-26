// Imports - Requires
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Reading Directories and Filtering JS Files.
const commandFolders = fs.readdirSync(path.join(__dirname, "commands"))
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(path.join(__dirname, `commands/${folder}`)).filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(path.join(__dirname, `commands/${folder}/${file}`));
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

    // Command Not Found Error Handler
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); 
    if (!command) {
        message.channel.send(`**ERROR[${message.author}]:** "${message.content}" is not a valid command.`);
    } else {
        if (command.permissions) {
            const authorPermissions = message.channel.permissionsFor(message.author);
            if (!authorPermissions || !authorPermissions.has(command.permissions)) {
                return message.channel.send(`${message.author}, you're not allowed to run this command.`);
            }
        }

        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.channel.send(`**ERROR[${message.author}]:** Cannot execute that command.`);
        }
    }
});

client.login(process.env.TOKEN);
