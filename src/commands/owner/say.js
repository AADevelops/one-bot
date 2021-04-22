module.exports = {
    name: "say",
    description: "Used to speak through the bot.",
    usage: `${process.env.PREFIX}say <message>`,
    permissions: "ADMINISTRATOR",
    execute(message, args) {
        message.channel.send(args.join(" "));
        message.delete();
    }
}