module.exports = {
    name: "shutdown",
    description: "Used to shut down the bot.",
    permissions: "ADMINISTRATOR",
    async execute(message) {
        await message.channel.send(`**STATUS[${message.author}]:** Shutting down...`);
        process.exit();
    }
}
