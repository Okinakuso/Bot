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

bot.on("message", message => {
    if (message.content === "?nitroz") {
    message.channel.sendMessage("Un gros con qui dit tout le temps <<comme tu veut>>");
  }

});

bot.on("message", message => {
    if (message.content === "?cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }

});

bot.on("message", message => {
    if (message.content === "?okina") {
    message.channel.sendMessage("Sombre en***er qui ressent le besoin d etre superieur au autres et qui est aussi le Fondateur des serveurs");
  }

});

bot.on("message", message => {
    if (message.content === "?spara") {
    message.channel.sendMessage("Rien a dire sur ce co***rd de flemmard...");
  }

});

bot.on("message", message => {
    if (message.content === "?ayu") {
    message.channel.sendMessage("Quoi ?? elle est encore ici elle ?");
  }

});
