exports.run = (client, message, args) =>
{
  let ch = message.mentions.channels.first();
  let msg;
  
  if (ch)
  {
    args.shift();
    msg = args.join(" ");
    ch.send(msg).then(m => m.pin());
  }
  else
  {
    msg = args.join(" ");
    message.channel.send(msg).then(m => m.pin());
  }
  
  message.delete();
}
  