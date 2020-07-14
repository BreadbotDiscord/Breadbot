const Discord = require("discord.js")
const prefixes = require("../prefixes.json")

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.MessageEmbed()
    .setDescription("Bot Information")
    .setColor("#0FD22E")
    .addField("Bot name", bot.user.username)
    .addField("Bot version", "1.3.5")
    .addField("Created on", bot.user.createdAt)
    .addField("Prefix", prefixes[message.guild.id].prefix)
    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo",
    aliases: [""]
}