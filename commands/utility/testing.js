module.exports = {
    name: "testing",
    description: "Testing command.",
    execute(message) {
        message.channel.send("Test Successful.");
    }
}