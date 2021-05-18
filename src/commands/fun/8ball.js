module.exports = {
    name: "8ball",
    description: "Used for fortune-telling or seeking advice.",
    usage: `${process.env.PREFIX}8ball <question>`,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`${message.author}, you must include the question after the command.`);
        }

        responses = ["It is certain.", 
        "It is decidedly so.", 
        "Without a doubt.", 
        "Yes - definitely.", 
        "You may rely on it.", 
        "As I see it, yes.", 
        "Most likely.", 
        "Outlook good.", 
        "Yes.", 
        "Signs point to yes.", 
        "Reply hazy, try again.", 
        "Ask again later.", 
        "Better not tell you now.",
        "Can't predict now.", 
        "Concentrate, and ask again.", 
        "Don't count on it.", 
        "My reply is no.", 
        "My sources say no.", 
        "Outlook not so good.", 
        "Very doubtful."]

        message.channel.send(`Question: ${args.join(" ")} ${"\n"}Response: ${responses[Math.floor((Math.random() * 20) + 1)]}`);
    }
}
