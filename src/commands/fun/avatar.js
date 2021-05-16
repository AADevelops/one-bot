module.exports = {
    name: "avatar",
    aliases: ["icon", "pfp"],
    description: "Displays the profile picture of a member.",
    usage: ";avatar [optional<userMention>]",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(message.author.displayAvatarURL());
        }

        const argTag = args[0].match(/<[@#][!&]?[0-9]+>/g);
        if (args[0] === "@everyone" || args[0] === "@here") {
            return message.channel.send(`${message.author}, please do not ping everyone.`);
        } else if (argTag) {
            const member = message.mentions.members.first();
            message.channel.send(member.user.displayAvatarURL());
        } else {
            message.channel.send(`${message.author}, the member is not in the server or you have not pinged correctly.`);
        }
    }
}
