exports.run = (client, message, args) =>
{
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Use `!ufc addpoints <@member> <kills> [<top>]` format");
  args.shift();
  
  let pts = 0;
  let kills = parseInt(args.shift());
  let pos = args.join(" ");
  let def = client.db.get("points").value(); // definitions
  
  if (isNaN(kills)) return message.channel.send("Use `!ufc points <kills> [<top>]` format");
  
  //pts += kills;
  
  if (kills < 3) pts = 0;
  else if (kills < 5) pts = 1;
  else if (kills < 7) pts = 2;
  else if (kills < 10) pts = 3;
  else pts = 4;
  
  let bonus = def.find(d => d.name.toLowerCase() == pos.toLowerCase());
  
  if (bonus) pts += bonus.value;
  
  let data = client.db.get("players").find({id: member.id});
  
  if (!data.value()) client.db.get("players").push({id: member.id, points: pts}).write();
  else data.update("points", n => n + pts).write();
  
  message.channel.send({embed: {
    title: "Points Added",
    description: "Added `" + pts + "` points to <@" + member.id + ">\nTotal: `" + data.value().points + "`",
    color: client.config.color
  }});
}