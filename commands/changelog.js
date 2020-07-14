const Discord = require("discord.js");
const fs = require("fs");

let changelog = new Discord.MessageEmbed()
.setColor('#1311DC')
     .setTitle("Changelog v1.3.5")
     .addField("See the bot ping!", "Use ?ping to see how much ping the bot is on")
     .addField("Change the prefix!", "You can now change the prefix with ?prefix <prefix>")
     .addField("New economy features", "you can now see your balance with ?bal")
     .addField("New Moderator features", "You can now kick, ban, clear, and report people with the bot")

module.exports.run = async (bot, message, args) => {

    const m = await message.channel.send(changelog);
}

module.exports.help = {
    name: "changelog",
    aliases: ["changes"]
}