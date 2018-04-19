const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Kurumie, ?help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "?ping") {
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi");
  }

});
