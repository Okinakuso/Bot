const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("?help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
  if (message.content === "?avatar") {
    message.channel.sendMessage(message.author.avatarURL);
  }
});



bot.on("message", message => {
    if (message.content === "?ping") {
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi fils de p**e");
  }

});

bot.on("message", message => {
    if (message.content === "?ching") {
    message.channel.sendMessage("tu es raciste !");
  }

});

bot.on("message", message => {
    if (message.content === "?nitroz") {
    message.channel.sendMessage("Un gros con qui dit tout le temps <<comme tu veux>>");
  }

});

bot.on("message", message => {
    if (message.content === "?cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }

});

bot.on("message", message => {
    if (message.content === "?okina") {
    message.channel.sendMessage("Sombre en***er qui ressent le besoin d etre superieur aux autres et qui est aussi le Fondateur des serveurs");
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



bot.on("message", message => {
  if (message.content === "?help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes du bot !" ,  "Voici le menu ?help")
      .addField("commandes p.1" , "?okina   ?cora")
      .addField("commandes p.2" , "?nitroz   ?spara")
      .addField("commandes p.3" , "?ayu      ?avatar")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

});
