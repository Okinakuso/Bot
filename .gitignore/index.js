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
    message.channel.sendMessage("tu as cru que j allais dire pong ou quoi fils de pute");
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
    message.channel.sendMessage("La plus belle femme du monde et qui est aussi la futur femme de okina");
  }
    
  if (message.content === ".Manon") {
    message.channel.sendMessage("La plus grosse PETASSE du discord");
  }

  if (message.content === ".okina") {
    message.channel.sendMessage("Sombre enculer qui ressent le besoin d etre superieur aux autres et qui est aussi le Maire du hameau.");
  }
    
  if (message.content === ".soduxy") {
    message.channel.sendMessage("http://image.noelshack.com/fichiers/2019/05/6/1549115880-plop.png");
  }
    
  if (message.content === ".soxis") {
    message.channel.sendMessage("Un mec qui pense etre le boss mais qui a en faite un complexe de supériorité donc nous le laissons faire.");
  }

  if (message.content === ".juiverie") {
    message.channel.sendMessage("http://image.noelshack.com/fichiers/2019/05/7/1549224088-tenor.gif");
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
    
   if (message.content === ".lgel") {
    message.channel.sendMessage("https://lgelinfos.fr/joueur");
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
      .addField("Les commandes inutiles" , ".okina .cora .soxis .soduxy .juiverie .pute")
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

  if (message.content === ".help3") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes pour jouer" , ".skribbl .limite .bac .lgel")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }

});
