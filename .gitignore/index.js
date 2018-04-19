const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("?help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);

client.on('ready', () => {
  console.log('I am ready!');
});




