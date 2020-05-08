exports.run = (client, message, args) =>
{
  let member = message.mentions.members.first();
  args.shift();
  let pts = parseInt(args[0]);
  if (!member || isNaN(pts)) return message.channel.send("Use `!ufc addpoints <@member> <points>` format.");
  
  if (!client.db.get("players").find({id: member.id}).value()) client.db.get("players").push({id: member.id, points: 0});
  
  client.db.get("players").find({id: member.id}).set("points", pts).write();
  
  message.channel.send({embed: {
    title: "Points Set",
    description: "<@" + member.id + "> now has `" + pts + "` points",
    color: client.config.color
  }})
}