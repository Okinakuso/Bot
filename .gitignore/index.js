const Discord = require("discord.js");

var bot = new Discord.Client();
var randnum = 0;
var prefix = ".";

bot.on("ready", function() {
    bot.user.setGame(".help");
    console.log("Le bot est bien connecte");
});

bot.login(process.env.TOKEN);

function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(5);
  randnum = Math.floor(Math.random() * (max -min +1) + min);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {

  if (message.content.startsWith(`${prefix}avatar`)) {
    message.channel.send(message.author.avatarURL);
   }
    
if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send(`t as cru que j allais dire pong ou quoi ? Dechet !`);
  } else if (message.content.startsWith(`${prefix}ching`)) {
    message.channel.send(`tu es raciste !`);
  }  else if (message.content.startsWith(`${prefix}anime`)) {
    message.channel.send(`https://www.randomanime.org/list/?l=703869fb&view=single&lang=any`);
  }  else if (message.content.startsWith(`${prefix}pute`)) {
    message.channel.send(`INVOCATION !`);
    message.channel.send(`http://image.noelshack.com/fichiers/2019/05/7/1549220487-dyvp0n-xqaajsne.jpg`);
    message.channel.send(message.author.avatarURL);
  }  else if (message.content.startsWith(`${prefix}cheh`)) {
    message.channel.send(`https://thumbs.gfycat.com/AngryBrokenKodiakbear-max-1mb.gif`);
  }  else if (message.content.startsWith(`${prefix}again`)) {
    message.channel.send(`https://media1.tenor.com/images/1bf906f1d7b433f8ed538f5ed00cb22e/tenor.gif?itemid=13933485`);
  }  else if (message.content.startsWith(`${prefix}realy`)) {
    message.channel.send(`https://i.kym-cdn.com/photos/images/original/000/420/723/b6b.gif`);
  }  else if (message.content.startsWith(`${prefix}sauce`)) {
    message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572399987825049605/20190429_143256.gif`);
  }  else if (message.content.startsWith(`${prefix}hungry`)) {
    message.channel.send(`va chercher a manger au lieu d avoir la flemme dechet `);
  }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
if (message.content.startsWith(`${prefix}yami`)) {
    message.channel.send(`Un homme qui ressent le besoin d etre superieur aux autres.`);
    message.channel.send(`https://image.noelshack.com/fichiers/2019/17/1/1555965169-tumblr-pew9fkpgof1xqsds7o2-500.gif`);
  }  else if (message.content.startsWith(`${prefix}cora`)) {
    message.channel.send(`La plus belle femme du monde et qui est aussi la futur femme de Yami`);
    message.channel.send(`https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif`);
  }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  if (message.content === ".help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .setTitle("Voici les commandes du bot :eyes:")
      .setDescription("Voici le menu Help :question:")
      .addBlankField(true)
      .setFooter("ce bot a était crée par YamiKurai", "https://cdn.discordapp.com/attachments/568118396676341800/573842232948424705/yami0.5.png")
      .setImage("https://cdn.discordapp.com/attachments/373595246056964106/573843208786935818/5be.gif")
      .setThumbnail("https://cdn.discordapp.com/attachments/568118396676341800/573842967777902622/yami-black-clover-1024x576.jpg")
      .addField("Pour les commandes ciblées :information_desk_person:" , ".help-1")
      .addField("Déscription :" , "Elles désigne des connaissances du créateur.")
      .addBlankField(true)
      .addField("Pour les commandes fun :put_litter_in_its_place:" , ".help-2")
      .addField("Déscription :" , "Elles peuvent servir dans certaines situations.")
      .addBlankField(true)
      .addField("Pour les commandes pour jouer :video_game:" , ".help-3")
      .addField("Déscription :" , "Elles sont utile pour certain jeu proposer par le bot ou en ligne.")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

    
  if (message.content === ".help-1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes ciblées " , ".yami .cora ")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help1 demandée !");
      
  }

    
  if (message.content === ".help-2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes fun" , ".ping .ching .anime .avatar .pute ")
      .addField("Les commandes fun 2" , ".loli .cheh .octogone .again .jail")
      .addField("Les commandes fun 3" , ".yuri .yaoi .hug .slap .cry .realy")
      .addField("Les commandes fun 4" , ".pat .fuck .kiss .kawaii .lick .sauce")
      .addField("Les commandes fun 4" , ".creepy .cat .neko .dance .laugh .smile")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help2 demandée !");
      
  }

  if (message.content === ".help-3") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes pour jouer" , ".skribbl .limite .bac .dice .8ball")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help3 demandée !");
      
  }

});
