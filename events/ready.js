module.exports = (client) => {
  console.log('Connected and ready to work for ' +
    client.guilds.cache.size +
    " servers and " +
    client.users.cache.size +
    " users");
}
