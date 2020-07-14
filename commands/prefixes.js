const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

let permerr = new Discord.MessageEmbed()
.setColor('#DC1111')
     .setTitle("Set prefix failed")
     .setDescription(`You do not have permissions for this!`)

     let argserr = new Discord.MessageEmbed()
     .setColor('#DC1111')
          .setTitle("Set prefix failed")
          .setDescription(`Try again but this time actually state a prefix to change to`)    

module.exports.run = async (bot, message, args) => {

    let prefixes  = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: botconfig.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(permerr);


    if(!args[0]) return message.channel.send(argserr);

    prefixes[message.guild.id] = {
        prefix: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let success = new Discord.MessageEmbed()
     .setColor('#0FD22E')
     .setTitle("Set Prefix")
     .setDescription(`Set prefix to ${args[0]}`)

     message.channel.send(success)

}
module.exports.help = {
    name: "prefix",
    aliases: ['prefix-set']
}