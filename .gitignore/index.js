const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0


bot.on("ready", function() {
    bot.user.setGame(".help");
    console.log("Le bot est bien connecte")
});

bot.login(process.env.TOKEN);

function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(5);
  randnum = Math.floor(Math.random() * (max -min +1) + min);
}



bot.on('message', message => {
  if (message.content === ".avatar") {
    message.channel.sendMessage(message.author.avatarURL);
  }


 if (message.content === ".ping") {
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi fils de p**e");
  }


 if (message.content === ".ching") {
    message.channel.sendMessage("tu es raciste !");
  }



  if (message.content === ".cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }


  if (message.content === ".okina") {
    message.channel.sendMessage("Sombre enculer qui ressent le besoin d etre superieur aux autres et qui est aussi le Maire du hameau.");
  }


  if (message.content === ".anime") {
    message.channel.sendMessage("https://www.randomanime.org/random-anime-game.php");

  }   
    
    
  if (message.content === ".dice"){
      random();   

       if (randnum == 0){
           message.reply("1");
          console.log(randnum);
       }

       if (randnum == 1){
           message.reply("2");
           console.log(randnum);
       }


       if (randnum == 2){
           message.reply("3");
           console.log(randnum);
        }

        if (randnum == 3){
            message.reply("4");
            console.log(randnum);
        }
        
        if (randnum == 4){
            message.reply("5");
            console.log(randnum);
        }
      
        if (randnum == 5){
            message.reply("6");
            console.log(randnum);
        }   

  }
    

  if (message.content === ".help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes du bot !" ,  "Voici le menu .help")
      .addField("Pour les commandes inutiles" , ".help1")
      .addField("Pour les commandes fun" , ".help2")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

    
  if (message.content === ".help1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes inutiles" , ".okina .cora")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
  }

    
  if (message.content === ".help2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes fun" , ".anime .dice .avatar")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }


});
