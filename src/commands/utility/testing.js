module.exports = {
    name: "testing",
    description: "Testing command.",
    execute(message, args) {
        if (!args.length) {
            message.channel.send("Test Successful.");
        } else if (args[0] === "hi" || args [1] === "bye") {
            message.channel.send("Test Argument(s) Worked!");
        } else {
            message.channel.send("Invalid Argument(s).");
        }
    }
}