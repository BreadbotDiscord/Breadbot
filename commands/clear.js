const Discord = require("discord.js");

let clearpermerr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#c2281d")
    .addField("Unable to clear messages", "You do not have the manage messages permission");
    let argserr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#c2281d")
    .addField("Unable to clear messages", "I do not know how many to delete you need to speciy");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(clearpermerr)
    if(!args[0]) return message.channel();
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    });
}

    module.exports.help = {
        name: "clear",
        aliases: ["purge"]
}