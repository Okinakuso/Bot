const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0;
var prefix = ".";

bot.on("ready", function() {
    bot.user.setGame(".try");
    console.log("Le bot est bien connecte");
});

bot.login(process.env.TOKEN);

function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(12);
  randnum = Math.floor(Math.random() * (max -min +1) + min);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
   if (message.content === ".avatar") {
    message.channel.send(message.author.avatarURL);
  }
    
 if (message.content === ".ping") {
    message.channel.send("t as cru que j allais dire pong ou quoi fils de pute");
  }

 if (message.content === ".ching") {
    message.channel.send("tu es raciste !");
  }    
    
  if (message.content === ".anime") {
    message.channel.send("https://www.randomanime.org/list/?l=703869fb&view=single&lang=any");
  }   
    
  if (message.content === ".pute") {
    message.channel.send("INVOCATION !");
    message.channel.send("http://image.noelshack.com/fichiers/2019/05/7/1549220487-dyvp0n-xqaajsne.jpg");
    message.channel.send(message.author.avatarURL);
  }

  if (message.content === ".loli") {
    message.channel.send("https://image.noelshack.com/fichiers/2019/17/1/1555964709-tenor.gif");
  }
    
  if (message.content === ".cheh") {
    message.channel.send("CHEH !!!!");
    message.channel.send("https://thumbs.gfycat.com/AngryBrokenKodiakbear-max-1mb.gif");
  }
    
  if (message.content === ".again") {
    message.channel.send("come on");
    message.channel.send("https://images-ext-2.discordapp.net/external/P2Ism1PGSkXCd7W_mEAzBoYvyBQIswXChL1RHmricow/%3Fitemid%3D13933485/https/media1.tenor.com/images/1bf906f1d7b433f8ed538f5ed00cb22e/tenor.gif");
  }
 
  if (message.content === ".shit") {
    message.channel.send("Tsukimasu kusotare");
    message.channel.send("https://cdn.discordapp.com/attachments/568118396676341800/570625547319902208/ezgif.com-gif-maker.gif");
  }
    
  if (message.content === ".octogone") {
    message.channel.send("Go octogone sans règles sous race !");
    message.channel.send("https://66.media.tumblr.com/00adce6cac552d1126167f58628261bf/tumblr_pcrejxWhIh1usyygio2_400.gif");
  }
    
   if (message.content === ".fuck") {
    message.channel.send("Just fuck off");
    message.channel.send("https://media1.tenor.com/images/56ad2a999554be01ad74497c0d1325b7/tenor.gif?itemid=10678828");
  }
    
   if (message.content === ".tera") {
    message.channel.send("The definition of Tera");
    message.channel.send("https://media.giphy.com/media/Y2mV4BtFdKy2E61CIU/giphy.gif");
  }

  if (message.content === ".slap") {
    message.channel.send("Kuso !");
    message.channel.send("https://media0.giphy.com/media/a7HKjDb3UJ0kM/giphy.gif");
  }

  if (message.content === ".cry") {
    message.channel.send("no , i don't");
    message.channel.send("http://66.media.tumblr.com/tumblr_m8ojbcznQ61rz5p5po3_500.gif");
  }

  if (message.content === ".hug") {
    message.channel.send(":heart: :heart: :heart: :heart: :heart:");
    message.channel.send("https://media1.tenor.com/images/efdd8f53689b1bb3437054d608156e95/tenor.gif?itemid=5101517");
  }

  if (message.content === ".yaoi") {
    message.channel.send(":gay_pride_flag: :gay_pride_flag: ♂️♂️ :gay_pride_flag: :gay_pride_flag: ");
    message.channel.send("https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif");
  }
    
  if (message.content === ".yuri") {
    message.channel.send(":gay_pride_flag: :gay_pride_flag: ♀️♀️ :gay_pride_flag: :gay_pride_flag: ");
    message.channel.send("https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif");
  }

  if (message.content === ".rly") {
    message.channel.send("Ur in the shit ni****");
    message.channel.send("https://i.kym-cdn.com/photos/images/original/000/420/723/b6b.gif");
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
  if (message.content === ".yami") {
    message.channel.send("Un homme qui ressent le besoin d etre superieur aux autres.");
    message.channel.send("https://image.noelshack.com/fichiers/2019/17/1/1555965169-tumblr-pew9fkpgof1xqsds7o2-500.gif");
  }
    
  if (message.content === ".cora") {
    message.channel.send("La plus belle femme du monde et qui est aussi la futur femme de Yami");
    message.channel.send("https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif");
  }
    
  if (message.content === ".illya") {
    message.channel.send("Le sac a foutre supreme mais aussi notre GM");
    message.channel.send("https://media1.tenor.com/images/1e0593d9bf7b27cde0be27007d00887e/tenor.gif?itemid=5531465");
  } 
    
  if (message.content === ".xam") {
    message.channel.send("Faite attention a vous il est comme ca tout le temps");
    message.channel.send("https://image.noelshack.com/fichiers/2019/17/1/1555964641-9aqn.gif");
  } 
    
  if (message.content === ".golden") {
    message.channel.send("Wallah c'est une victime");
    message.channel.send("https://media.giphy.com/media/pPQyXGxwx272E/giphy.gif");
  } 
    
  if (message.content === ".louhan") {
    message.channel.send("Prenez garde à son futur 28M dps!");
    message.channel.send("https://cdn.discordapp.com/attachments/568118396676341800/570343991292198932/20190423_222312.gif");
  }
    
  if (message.content === ".tezer") {
    message.channel.send("Paix et amour sont les mots qui le définissent!");
    message.channel.send("https://cdn.discordapp.com/attachments/568118396676341800/570348806437339144/1.gif");
  } 
    
  if (message.content === ".chou") {
    message.channel.send("Je suis une licooooooorne :heart: * :heart:");
    message.channel.send("https://tenor.com/view/supernatural-unicorn-rainbow-tail-gif-5754797");
  } 
    
  if (message.content === ".kaisa") {
    message.channel.send("Je t'aime, tu es parfait comme tu es. Ne change jamais c: :heart: * :heart: ");
    message.channel.send("https://tenor.com/view/beer-unicorn-lets-get-drunk-gif-13996107");
  } 
    
  if (message.content === ".lucy") {
    message.channel.send("La meilleure amie de Milord et la future femme de Mme Su");
    message.channel.send("https://cdn.discordapp.com/attachments/568118396676341800/570321500238774304/20190423_205336.gif");
  } 
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
   if (message.content === ".skribbl") {
    message.channel.send("https://skribbl.io/");
  }   
    
   if (message.content === ".limit") {
    message.channel.send("https://limitelimiteenligne.com/#/choose");
  }   
    
   if (message.content === ".bac") {
    message.channel.send("https://petitbacenligne.net/new-game.xhtml");
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

        if (randnum == 6){
          message.reply("1");
         console.log(randnum);
        }

        if (randnum == 7){
          message.reply("2");
          console.log(randnum);
        }

        if (randnum == 8){
          message.reply("3");
          console.log(randnum);
         }

         if (randnum == 9){
           message.reply("4");
           console.log(randnum);
         }
       
         if (randnum == 10){
           message.reply("5");
           console.log(randnum);
         }
     
         if (randnum == 11){
           message.reply("6");
           console.log(randnum);
         }   
 
  }
        
  if (message.content === ".8ball"){
    random();   

     if (randnum == 0){
         message.reply("Oui");
        console.log(randnum);
     }

     if (randnum == 1){
         message.reply("Gros j'ai pas ton temps , j'ai un taff moi!");
         console.log(randnum);
     }

     if (randnum == 2){
         message.reply("Une chance sur deux ");
         console.log(randnum);
      }

      if (randnum == 3){
          message.reply("D'après moi oui");
          console.log(randnum);
      }
      
      if (randnum == 4){
          message.reply("Sans aucun doute");
          console.log(randnum);
      }
    
      if (randnum == 5){
          message.reply("Tu peux compter dessus");
          console.log(randnum);
      }   

     if (randnum == 6){
         message.reply("N'y compte pas");
        console.log(randnum);
     }

     if (randnum == 7){
         message.reply("Impossible ");
         console.log(randnum);
     }

     if (randnum == 8){
         message.reply("C'est non");
         console.log(randnum);
      }

      if (randnum == 9){
          message.reply("Faut pas rêver");
          console.log(randnum);
      }
      
      if (randnum == 10){
          message.reply("Pas d'avis");
          console.log(randnum);
      }
    
      if (randnum == 11){
          message.reply("Gros retourne sur Tera et me fait pas chier");
          console.log(randnum);
      }  
    
    
}
    
    client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("ORANGE")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  if (message.content === ".help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes du bot !" ,  "Voici le menu .help")
      .addField("Pour les commandes ciblées" , ".help1")
      .addField("Pour les commandes inutiles" , ".help2")
      .addField("Pour les commandes pour jouer " , ".help3")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

    
  if (message.content === ".help1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes ciblées " , ".yami.cora .illya .xam .golden ")
      .addField("Les commandes ciblées 2" , ".louhan .chou .kaisa .lucy .tezer .milord")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help1 demandée !");
      
  }

    
  if (message.content === ".help2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes inutiles" , ".ping .ching .anime .avatar .pute .tera")
      .addField("Les commandes inutiles 2" , ".loli .cheh .shit .octogone .again .fuck")
      .addField("Les commandes inutiles 2" , ".yuri .yaoi .hug .slap .cry .rly")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
  }

  if (message.content === ".help3") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes pour jouer" , ".skribbl .limite .bac .dice")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }

});
