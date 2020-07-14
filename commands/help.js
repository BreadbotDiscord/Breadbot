const Discord = require("discord.js")
const prefixes = require("../prefixes.json")

let botembed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setColor("#0FD22E")
    .addField("Module Moderation", "use ?help moderation for a list of commands", true)
    .addField("Module Economy", "use ?help economy for a list of commands", true)
    .addField("Module Fun", "use ?help fun for a list of commands", true)
    .addField("Module Utility", "use ?help utility for a list of commands", true)
    .addField("Still need help?", "Join our support server at https://discord.gg/87yEjuV")
    .setFooter("Make sure to leave some suggestions in our support server")


    let modembed = new Discord.MessageEmbed()
    .setTitle("Help Moderation")
    .setColor("#0FD22E")
    .addField("Report", "Report a user with ?report <reason>")
    .addField("Clear, Purge", "Use ?purge or ?clear to clear the stated amount of messages from the channel")
    .addField("Kick", "Use ?kick @<user> <reason> to kick users on the server")
    .addField("Kick", "Use ?kick @<user> <reason> to kick users on the server")
    .addField("Ban", "Use ?Ban @<user> <reason> to Ban users on the server")

    let ecoembed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setColor("#0FD22E")
    .addField("Balance", "check you balance with ?bal or ?balance")
    .addField("Daily", "?daily to collect a daily reward")
    .addField("More soon", "more economy commands coming soon")

    let funembed = new Discord.MessageEmbed()
    .setTitle("Help Fun commands")
    .setColor("#DE0F0F")
    .addField("ERROR", "No current Fun commands. coming soon!")

    let utiembed = new Discord.MessageEmbed()
    .setTitle("Help Fun commands")
    .setColor("#0FD22E")
    .addField("Ping", "See the bots ping with ?ping")
    .addField("serverinfo", "See info of the server and more with ?serverinfo")
    .addField("botinfo", "See info of the bot and more with ?botinfo")
    .addField("Upcoming", "More commands soon!")

module.exports.run = async (bot, message, args) => {
    if(!args[0])
     message.channel.send(botembed);
     else if (args[0] === "moderation")
     message.channel.send(modembed);
     else if (args[0] === "economy")
     message.channel.send(ecoembed);
     else if (args[0] === "fun")
     message.channel.send(funembed)
     else if (args[0] === "utility")
     message.channel.send(utiembed)
}

module.exports.help = {
    name: "help",
    aliases: ["@Discord bot#8734"]
}