const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0


bot.on("ready", function() {
    bot.user.setGame(".try");
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
    message.channel.sendMessage("t as cru que j allais dire pong ou quoi fils de pute");
  }


 if (message.content === ".ching") {
    message.channel.sendMessage("tu es raciste !");
  }

  if (message.content === ".pute") {
    message.channel.sendMessage("INVOCATION !");
    message.channel.sendMessage("http://image.noelshack.com/fichiers/2019/05/7/1549220487-dyvp0n-xqaajsne.jpg");
    message.channel.sendMessage(message.author.avatarURL);
  }

  if (message.content === ".cora") {
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de Yami");
    message.channel.sendMessage("https://image.noelshack.com/fichiers/2019/17/1/1555965464-giphy.gif");
  }

  if (message.content === ".illya") {
    message.channel.sendMessage("Le sac a foutre supreme mais aussi notre GM");
    message.channel.sendMessage("https://image.noelshack.com/fichiers/2019/17/1/1555965518-tenor.gif");
  } 
    
  if (message.content === ".xam") {
    message.channel.sendMessage("Faite attention a vous il est comme ca tout le temps");
    message.channel.sendMessage("https://image.noelshack.com/fichiers/2019/17/1/1555964641-9aqn.gif");
  } 
    
  if (message.content === ".yami") {
    message.channel.sendMessage("Un homme qui ressent le besoin d etre superieur aux autres.");
    message.channel.sendMessage("https://image.noelshack.com/fichiers/2019/17/1/1555965169-tumblr-pew9fkpgof1xqsds7o2-500.gif");
  }

  if (message.content === ".loli") {
    message.channel.sendMessage("https://image.noelshack.com/fichiers/2019/17/1/1555964709-tenor.gif");
  }

  if (message.content === ".anime") {
    message.channel.sendMessage("https://www.randomanime.org/list/?l=703869fb&view=single&lang=any");
  }   
    
   if (message.content === ".skribbl") {
    message.channel.sendMessage("https://skribbl.io/");
  }   
    
   if (message.content === ".limit") {
    message.channel.sendMessage("https://limitelimiteenligne.com/#/choose");
  }   
    
   if (message.content === ".bac") {
    message.channel.sendMessage("https://petitbacenligne.net/new-game.xhtml");
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
      .addField("Pour les commandes pour jouer " , ".help3")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

    
  if (message.content === ".help1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes inutiles" , ".yami .cora .illya .xam .pute")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
  }

    
  if (message.content === ".help2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes fun" , ".anime .dice .avatar .loli")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }

  if (message.content === ".help3") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes pour jouer" , ".skribbl .limite .bac")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }

});
