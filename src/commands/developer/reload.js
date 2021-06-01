const fs = require("fs");

module.exports = {
    name: "reload",
    description: "Refreshes a specific command.",
    usage: `${process.env.PREFIX}reload <commandName>`,
    permissions: "ADMINISTRATOR",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`${message.author}, you must include the command name.`)
        }

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            return message.channel.send(`${message.author}, you must enter a valid command name.`);
        }

        const commandFolders = fs.readdirSync("./src/commands/");
        const folderName = commandFolders.find(folder => fs.readdirSync(`./src/commands/${folder}`).includes(`${command.name}.js`));

        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

        try {
            const reloadedCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(reloadedCommand.name, reloadedCommand);
            message.channel.send(`**ext.Reload[${message.author}]:** \`${reloadedCommand.name}\` has been successfully reloaded.`);
        } catch (error) {
            console.log(error);
            message.channel.send(`**ERROR[${message.author}]:** An error has occurred while reloading the command.`);
        }
    }
}
