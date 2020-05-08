const admins = ["441317357940637706", "461594470413238283"];
const adminCommands = ["createroles", "dm", "eval", "move", "pin", "ping", "reactions", "say", "welcome", "help", "points", "addpoints", "removepoints", "setpoints"];

exports.run = (client, message) =>
{
  const prefixes = ["!orl", client.config.prefix];
  
  let prefix = "";
  
  prefixes.forEach((element) =>
  {
    if (message.content.toLowerCase().indexOf(element.toLowerCase()) === 0) prefix = element;
  });
  
  if (prefix == "")
  {
    if (message.author.bot) return;
    require("./react.js").run(client, message);
    return;
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (adminCommands.includes(cmd) && !admins.includes(message.author.id))
  {
    message.channel.send("You're not authorized.");
    return;
  }
  
  let commandFile = require("./cmd/" + cmd + ".js");
  commandFile.run(client, message, args);
}

