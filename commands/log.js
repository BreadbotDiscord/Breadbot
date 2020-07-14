const Discord = require("discord.js");
const fs = require("fs");
const auditlog = require("../logs.json");

let permerr = new Discord.MessageEmbed()
.setColor('#DC1111')
     .setTitle("Set log channel failed")
     .setDescription(`You do not have permissions for this!`)

     let argserr = new Discord.MessageEmbed()
     .setColor('#DC1111')
          .setTitle("Set prefix failed")
          .setDescription(`Try again but this time actually state a logs channel to change to`)    

module.exports.run = async (bot, message, args) => {

    let auditlog  = JSON.parse(fs.readFileSync("./logs.json"), "utf8");
    if(!auditlog[message.guild.id]) {
        auditlog[message.guild.id] = {
            logs: auditlog
        }
    }
    let logs = auditlog[message.guild.id].logs;

    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(permerr);


    if(!args[0]) return message.channel.send(argserr);

    auditlog[message.guild.id] = {
        auditlog: args[0]
    }

    fs.writeFile("./logs.json", JSON.stringify(auditlog), (err) => {
        if (err) console.log(err)
    });

    let success = new Discord.MessageEmbed()
     .setColor('#0FD22E')
     .setTitle("Set Prefix")
     .setDescription(`Set logs channel to to ${args[0]}`)

     message.channel.send(success)

}
module.exports.help = {
    name: "setlog",
    aliases: []
}