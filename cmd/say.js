exports.run = (client, message, args) =>
{
  if (!args[0])
  {
    message.channel.send("There's nothing to say.");
  }
  else
  {
    let text = args.join(" ");
    message.channel.send(text);
  }
}