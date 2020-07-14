const Discord = require("discord.js")

let kickpermerr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#c2281d")
    .addField("Unable to kick user", "You do not have permission to do that");

    let kickargerr = new Discord.MessageEmbed()
    .setDescription("Error")
    .setColor("#23b81d")
    .addField("Error", "You not have to specify a person to kick");
    let kicked = new Discord.MessageEmbed()
    .setDescription("Success")
    .setColor("#d1221f")
    .addField("Kick succesful","Member has been kicked")

module.exports.run = async (bot, message, args) => {


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(kickpermerr);
    else if(!kUser) return message.channel.send(kickargerr);
    let kreason = args.join(" ").slice(22);
    if(!kreason) return kreason === "No reason set";

    let kickembed = new Discord.MessageEmbed()
    .setDescription("Kick")
    .setColor("#25c21d")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked by", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Kicked in", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason)

    let kickchannel = message.guild.channels.cache.find(channel => channel.name === "🛠open-moderation")
    if(!kickchannel) return message.channel.send("That channel does not exist")
 
    message.guild.member(kUser).kick(kreason)
    message.channel.send(kicked);
    kickchannel.send(kickembed);
}

module.exports.help = {
    name: "kick",
    aliases: []
}