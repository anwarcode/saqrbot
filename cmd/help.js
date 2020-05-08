exports.run = (client, message, args) =>
{
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    .setAuthor("Originals Esports Help Menu")
    .setThumbnail(client.user.avatarURL)
    .setColor(client.config.color)
    .setDescription("Here's my list of commands!");
  
  const cmds =
  [
    [
      "Developer",
      "eval",
      "ping"
    ],
    [
      "Admin",
      "addpoints <@member> <points>",
      "dm <message>",
      "gainpoints <@member> <kills> <position>",
      "help",
      "move <voice channel>",
      "pin [<#channel>] <message>",
      "ping",
      "points [<@member>]",
      "reactions",
      "removepoints <@member> <points>",
      "say <message>",
      "scrims",
      "setpoints <@member> <points>",
      "welcome"
    ]
  ];
  
  for (let i = 0; i < cmds.length; i++)
  {
    embed.addField(cmds[i].shift(), join(cmds[i]));
  }
  
  message.channel.send(embed);
}

function join(array)
{
  let msg = "";
  for (let i = 0; i < array.length; i++) msg += "- `!orl " + array[i] + "`\n";
  return msg;
}