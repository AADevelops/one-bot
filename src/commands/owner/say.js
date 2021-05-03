module.exports = {
    name: "say",
    aliases: ["announce", "echo"],
    description: "Used to speak through the bot.",
    usage: `${process.env.PREFIX}say [optional<channel-Id>] <message>`,
    permissions: "ADMINISTRATOR",
    execute(message, args, client) {
        if (args[0].length === 18) {
            channel = client.channels.cache.get(args[0]);
            args.shift();
            channel.send(args.join(" "));
        } else {
            message.channel.send(args.join(" "));
        }

        message.delete();
    }
}
