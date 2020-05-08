exports.add = (client, member) =>
{
  let newmemberrole = member.guild.roles.find(r => r.name == "New Player");
  member.addRole(newmemberrole);
}

exports.remove = (client, member) =>
{
  
}