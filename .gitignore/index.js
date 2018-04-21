const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0

bot.on("ready", function() {
    bot.user.setGame("-help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
  if (message.content === "-avatar") {
    message.channel.sendMessage(message.author.avatarURL);
  }
});



bot.on("message", message => {
    if (message.content === "-ping") {
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi fils de p**e");
  }

});

bot.on("message", message => {
    if (message.content === "-ching") {
    message.channel.sendMessage("tu es raciste !");
  }

});

bot.on("message", message => {
    if (message.content === "-nitroz") {
    message.channel.sendMessage("Un gros con qui dit tout le temps <<comme tu veux>>");
  }

});

bot.on("message", message => {
    if (message.content === "-cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }

});

bot.on("message", message => {
    if (message.content === "-okina") {
    message.channel.sendMessage("Sombre en***er qui ressent le besoin d etre superieur aux autres et qui est aussi le Fondateur des serveurs");
  }

});

bot.on("message", message => {
    if (message.content === "-spara") {
    message.channel.sendMessage("Rien a dire sur ce co***rd de flemmard...");
  }

});

bot.on("message", message => {
    if (message.content === "-ayu") {
    message.channel.sendMessage("Quoi ?? elle est encore ici elle ?");
  }

});



bot.on("message", message => {
  if (message.content === "-site") {
    message.channel.sendMessage("https://fusionnetwork.online/");

  }

});

bot.on("message", message => {
  if (message.content === "-forum") {
    message.channel.sendMessage("https://fusionnetwork.online/forum/index.php?forums/");

  }

});

bot.on("message", message => {
    if (message.content === "-anime"){
      random();

    

       if (randnum == 1){
           message.reply("reponse 1");
          console.log(randnum);
       }

       if (randnum == 2){
           message.reply("reponse 2");
           console.log(randnum);
       }


       if (randnum == 3){
           message.reply("reponse 3");
           console.log(randnum);
        }


        if (randnum == 4){
            message.reply("reponse 4");
            console.log(randnum);
        }
        
        if (randnum == 5){
            message.reply("reponse 5");
            console.log(randnum);
        }

      

  }



}); 


bot.on("message", message => {
  if (message.content === "-help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes du bot !" ,  "Voici le menu -help")
      .addField("Pour les commandes utiles" , "-help1")
      .addField("Pour les commandes inutiles" , "-help2")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

});

bot.on("message", message => {
  if (message.content === "-help2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes inutiles" , "-okina  -cora  -nitroz -spara  -ayu")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help1 demandée !");
      
        }

});
    

bot.on("message", message => {
  if (message.content === "-help1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes utiles" , "-site   -forum    -avatar")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
        }

});


function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(5);
  randnum = Math.floor(Math.random() * (max -min +1) + min);
}
