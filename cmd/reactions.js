exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "Role Assignment",
    description: "**React with the following emojis to get their respective roles.**",
    image: {url: "https://i.imgur.com/W7quHMN.png"},
    footer: {text: "Do not spam!"},
    color: client.config.color
  }})
  .then(msg =>
  {
    let obj = client.config.reactions;
    
    for (let key in obj)
    {
      let emoji = message.guild.emojis.find(e => e.name == key);
      if (emoji) msg.react(emoji);
    }
    
    client.db.set("reactionmsg", msg.id).write();
  });
}