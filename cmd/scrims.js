exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "UFC SCRIMS",
    description: "**If you want access to UFC SCRIMS section, react here!**",
    image: {url: "https://i.imgur.com/JfvRWPG.png"},
    color: client.config.color
  }})
  .then(msg =>
  {
    let emoji = message.guild.emojis.find(e => e.name == "ufc");
    if (emoji) msg.react(emoji);
    
    client.db.set("custommsg", msg.id).write();
  });
}