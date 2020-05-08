exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "Welcome!",
    description: "**React to this message to gain access to our channels!**",
    image: {url: "https://i.imgur.com/EmkYHfv.png"},
    color: client.config.color
  }})
  .then(msg =>
  {
    let emoji = message.guild.emojis.find(e => e.name == "ufc");
    if (emoji) msg.react(emoji);
    
    client.db.set("welcomemsg", msg.id).write();
  });
}