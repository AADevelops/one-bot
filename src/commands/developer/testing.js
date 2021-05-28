// Testing

module.exports = {
    name: "testing",
    description: "Testing command.",
    usage: `${process.env.PREFIX}testing [optional<hi>] [optional<bye>]`,
    execute(message, args) {
        if (!args.length) {
            message.channel.send("Test Successful.");
        } else if (args[0] === "hi" || args[1] === "bye") {
            message.channel.send("Test Argument(s) Worked!");
        } else {
            message.channel.send("Invalid Argument(s).");
        }
    }
}
