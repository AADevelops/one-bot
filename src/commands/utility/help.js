module.exports = {
    name: "help",
    description: "Displays all commands.",
    usage: `${process.env.PREFIX}help <commandName>`,
    execute(message, args) {
        const { commands } = message.client
        const information = [];

        if (!args.length) {
            message.channel.send(`Commands: ${commands.map(command => command.name).join(", ")}`);
            message.channel.send("If you would like to have more detail for a command, use `;help <commandName>`");
        } else if (args.length) {
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));

            if (!command) {
                return message.channel.send(`${message.author}, the command you are trying to find is not valid.`);
            }

            information.push(`**Command Name:** ${command.name}`);

            if (command.aliases) information.push(`**Command Aliases:** ${command.aliases.join(", ")}`);
            if (command.description) information.push(`**Description:** ${command.description}`);
            if (command.usage) information.push(`**Usage:** ${command.usage}`);
            information.push(`**Cooldown:** ${command.cooldown || 0} second(s)`);

            message.channel.send(information, { split: true });
        }
    }
}