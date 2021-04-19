module.exports = {
    name: "shutdown",
    description: "Used to shut down the bot.",
    async execute(message) {
        await message.channel.send("STATUS: Shutting down...");
        process.exit();
    }
}