exports.run = (client, message, args) =>
{
  let name = args.join(" ");
  let ch1 = message.member.voiceChannel;
  let ch2 = message.guild.channels.find(c => (c.name == name && c.type == "voice"));
  
  if (!ch1) return message.channel.send("You aren't in a voice channel!");
  if (!args[0]) return message.channel.send("Please specify a voice channel's name");
  if (!ch2) return message.channel.send("Voice channel `" + name + "` doesn't exist!");
  
  ch1.members.forEach(m => m.setVoiceChannel(ch2));
  message.channel.send("All members moved from `" + ch1.name + "` to `" + ch2.name + "`");
}