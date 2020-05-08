exports.run = (client, message, args) =>
{
  let member = message.mentions.members.first() || message.member;
  let data = client.db.get("players").find({id: member.id});
  
  if (!data.value()) client.db.get("players").push({id: member.id, points: 0});
  
  message.channel.send({embed: {
    title: "Points",
    description: "<@" + member.id + "> points: `" + client.db.get("players").find({id: member.id}).get("points").value() + "`",
    color: client.config.color
  }})
}