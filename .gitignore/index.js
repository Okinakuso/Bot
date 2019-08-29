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
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


});
