const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Kurumie, ?help");
    console.log("Le bot est bien connecte")
});

bot.login("MzEyMjkwMTkzOTUwNTA3MDA4.DbotAw.wvisgbOjhp1PNFV3g1xIgu6tyVo");
