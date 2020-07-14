const Discord = require("discord.js")
const prefixes = require("../prefixes.json")

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.displayAvatarURL;
    let serverembed = new Discord.MessageEmbed()
    .setDescription("Server information")
    .setColor("#0FD22E")
    .setThumbnail(sicon)
    .addField("Server name", message.guild.name)
    .addField("Created on", message.guild.createdAt)
    .addField("You joined on", message.member.joinedAt)
    .addField("Total members", message.guild.memberCount)
    .addField("Bots in the server", message.guild.botCount);
    
    message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo",
    aliases: ["guildinfo"]
}