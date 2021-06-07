module.exports = {
    name: "binary",
    description: "Used to convert a decimal number into binary.",
    usage: `${process.env.PREFIX}binary <decimalNumber>`,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`${message.author}, you must include the decimal number after the command.`)
        }

        const result = (parseInt(args[0])).toString(2);
        if (result === "NaN") {
            return message.channel.send(`${message.author}, wrong command usage. Please use \`;help binary\` for the command usage.`);
        }

        message.channel.send(`${message.author} ${"\n"}Decimal Number: ${args[0]} ${"\n"}Binary Number: ${result}`);
    }
}
