const app      = express();
const Discord  = require("discord.js");
const client   = new Discord.Client();

// lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("/app/data/db.json");
const db = low(adapter);

db.defaults({})
  .write();

client.db = db;
client.config = require("./data/config.json");

// On Startup
client.on("ready", () =>
{
  //client.user.setActivity("with code", { type: "PLAYING" });
  console.log("Bot is up and running!");
});

// On receiving a message
client.on("message", message =>
{
  try { require("./response.js").run(client, message); }
  catch (err) { console.log(err); }
});

// On Member Join
client.on("guildMemberAdd", member =>
{
  try { require("./member.js").add(client, member); }
  catch (err) { console.log(err); }
});

// On Member Remove
client.on("guildMemberAdd", member =>
{
  try { require("./member.js").remove(client, member); }
  catch (err) { console.log(err); }
});

// Reaction Roles
require("/app/reactions.js").run(client);

// Login Discord Bot
client.login("bot token here");