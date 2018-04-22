const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0


bot.on("ready", function() {
    bot.user.setGame("-help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);

function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(6);
  randnum = Math.floor(Math.random() * (max -min +1) + min);
}



bot.on('message', message => {
  if (message.content === "-avatar") {
    message.channel.sendMessage(message.author.avatarURL);
  }


 if (message.content === "-ping") {
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi fils de p**e");
  }


 if (message.content === "-ching") {
    message.channel.sendMessage("tu es raciste !");
  }


 if (message.content === "-nitroz") {
    message.channel.sendMessage("Un gros con qui dit tout le temps <<comme tu veux>>");
  }



  if (message.content === "-cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }


  if (message.content === "-okina") {
    message.channel.sendMessage("Sombre en***er qui ressent le besoin d etre superieur aux autres et qui est aussi le Fondateur des serveurs");
  }


  if (message.content === "-spara") {
    message.channel.sendMessage("Rien a dire sur ce co***rd de flemmard...");
  }


  if (message.content === "-ayu") {
    message.channel.sendMessage("Quoi ?? elle est encore ici elle ?");
  }


  if (message.content === "-site") {
    message.channel.sendMessage("https://fusionnetwork.online/");

  }

  if (message.content === "-forum") {
    message.channel.sendMessage("https://fusionnetwork.online/forum/index.php?forums/");

  }

  if (message.content === "-anime") {
    message.channel.sendMessage("https://www.randomanime.org/random-anime-game.php");

  }   
    
  if (message.content === "-murder") {
    message.channel.sendMessage("https://www.gametracker.com/server_info/109.238.10.86:27015/b/");

  }
    
  if (message.content === "-deathrun") {
    message.channel.sendMessage("https://www.gametracker.com/server_info/109.238.10.86:27017/b/");

  }
    
  if (message.content === "-dice"){
      random();   

       if (randnum == 1){
           message.reply("1");
          console.log(randnum);
       }

       if (randnum == 2){
           message.reply("2");
           console.log(randnum);
       }


       if (randnum == 3){
           message.reply("3");
           console.log(randnum);
        }

        if (randnum == 4){
            message.reply("4");
            console.log(randnum);
        }
        
        if (randnum == 5){
            message.reply("5");
            console.log(randnum);
        }
      
        if (randnum == 6){
            message.reply("6");
            console.log(randnum);
        }   

  }
    
    
  
  if (message.content === "-chifoumi") {
    random();

    if (randnum == 7) {
      message.reply(":v:");
      console.log(randnum);
    }

    if (randnum == 8) {
      message.reply(":fist:");
      console.log(randnum);
    }


    if (randnum == 9) {
      message.reply(":raised_hand:");
      console.log(randnum);
    }

  }


  if (message.content === "-help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes du bot !" ,  "Voici le menu -help")
      .addField("Pour les commandes utiles" , "-help1")
      .addField("Pour les commandes inutiles" , "-help2")
      .addField("Pour les commandes fun" , "-help3")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

  if (message.content === "-help1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes utiles" , "-site -forum -murder -deathrun")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help1 demandée !");
      
  } 
    
  if (message.content === "-help2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes inutiles" , "-okina -cora -nitroz -spara -ayu")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
  }

    
  if (message.content === "-help3") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes utiles" , "-anime -dice -chifoumi -avatar")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }


});
