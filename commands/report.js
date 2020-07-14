const Discord = require("discord.js");
const auditlog = require("../logs.json")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

    let auditlog  = JSON.parse(fs.readFileSync("./logs.json"), "utf8");

    let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rUser) return message.channel.send("You have to tell me who to report i cant report nobody");
    let reason = args.join(" ").slice(22);

    let repembed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
    .addField("Reported in", message.channel)
    .addField("At", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.cache.find(ch => ch.id === auditlog[message.guild.id].logschannel);
    if(!reportschannel) return message.channel.send("Reports channel does not exist");
        
        reportschannel.send(repembed)
}   
module.exports.help = {
    name: "report",
    aliases: []
}