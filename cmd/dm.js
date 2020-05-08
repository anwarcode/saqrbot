exports.run = (client, message, args) =>
{
  let msg = args.join(" ");
  let memberArray = message.guild.members.array();
  
  memberArray.forEach(member => {if (!member.user.bot) member.send(msg); });
  message.channel.send("Sent DM to all members of this server");
  message.delete();
}