const Discord = require("discord.js")

let banpermerr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#c2281d")
    .addField("Unable to ban user", "You do not have permission to do that");

    let banargerr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#c2281d")
    .addField("Error", "You have to specify a person to ban");
    let banned = new Discord.MessageEmbed()
    .setDescription("Success")
    .setColor("#d1221f")
    .addField("Ban succesful","Member has been banned")

module.exports.run = async (bot, message, args) => {


    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(banpermerr);
    else if(!bUser) return message.channel.send(banargerr);
    let breason = args.join(" ").slice(22);
    if(!breason) return kreason === "No reason set";

    let banembed = new Discord.MessageEmbed()
    .setDescription("Ban")
    .setColor("#23b81d")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned by", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Banned in", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", breason)

    let banchannel = message.guild.channels.cache.find(channel => channel.name === "🛠open-moderation")
    if(!banchannel) return message.channel.send("That channel does not exist")
 
    message.guild.member(bUser).ban(breason)
    message.channel.send(banned);
    banchannel.send(banembed);
}

module.exports.help = {
    name: "ban",
    aliases: []
}