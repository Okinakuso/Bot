const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Kurumie, ?help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);
