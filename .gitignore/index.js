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
  }  else if (message.content.startsWith(`${prefix}tera`)) {
    message.channel.send(`https://media.giphy.com/media/Y2mV4BtFdKy2E61CIU/giphy.gif`);
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
  }  else if (message.content.startsWith(`${prefix}xam`)) {
    message.channel.send(`Faite attention a vous il est comme ca tout le temps`);
    message.channel.send(`https://image.noelshack.com/fichiers/2019/17/1/1555964641-9aqn.gif`);
  }  else if (message.content.startsWith(`${prefix}golden`)) {
    message.channel.send(`Wallah c'est une victime`);
    message.channel.send(`https://media.giphy.com/media/pPQyXGxwx272E/giphy.gif`);
  }  else if (message.content.startsWith(`${prefix}louhan`)) {
    message.channel.send(`Prenez garde à son futur 28M dps!`);
    message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/570343991292198932/20190423_222312.gif`);
  }  else if (message.content.startsWith(`${prefix}tezer`)) {
    message.channel.send(`Paix et amour sont les mots qui le définissent!`);
    message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/570348806437339144/1.gif`);
  }  else if (message.content.startsWith(`${prefix}lucy`)) {
    message.channel.send(`La meilleure amie de Milord et la future femme de Mme Su`);
    message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/570321500238774304/20190423_205336.gif`);
  } 
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
   if (message.content.startsWith(`.rage`)) {
      random();   

       if (randnum == 0){
           message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/570625547319902208/ezgif.com-gif-maker.gif`);
          console.log(randnum);
        }  else if (randnum == 1){
           message.channel.send(`https://pa1.narvii.com/7071/f74d3f00ecda88f9c04304c4a1706d9090c8f827r1-500-281_hq.gif`);
           console.log(randnum);
         }  else if (randnum == 2){
           message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/571810403231858688/1.gif`);
           console.log(randnum);
         }  else if (randnum == 3){
            message.channel.send(`https://data.whicdn.com/images/245572887/original.gif`);
            console.log(randnum);
         }  else if (randnum == 4){
            message.channel.send(`https://media.giphy.com/media/kH01iRXfD6UPC/giphy.gif`);
            console.log(randnum);
          }  else if (randnum == 5){
            message.channel.send(`https://thumbs.gfycat.com/AcrobaticVillainousGossamerwingedbutterfly-max-1mb.gif`);
            console.log(randnum);
     }   

  } 

  if (message.content.startsWith(`.hug`)) {
    random();   

     if (randnum == 0){
         message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572155476402372608/1.gif`);
        console.log(randnum);
      }  else if (randnum == 1){
         message.channel.send(`http://reve-of-manga.r.e.pic.centerblog.net/e92ee753.gif`);
         console.log(randnum);
       }  else if (randnum == 2){
         message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572156072706572448/1.gif`);
         console.log(randnum);
       }  else if (randnum == 3){
          message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572156251862204426/1.gif`);
          console.log(randnum);
       }  else if (randnum == 4){
          message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572144619425366037/1.gif`);
          console.log(randnum);
        }  else if (randnum == 5){
          message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572145015850139677/1.gif`);
          console.log(randnum);
   }   

} 

if (message.content.startsWith(`.slap`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://media0.giphy.com/media/a7HKjDb3UJ0kM/giphy.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572155325931847682/tenor_1.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://media.giphy.com/media/oL7evncYvZ9II/giphy.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://i.gifer.com/VF8X.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://i.kym-cdn.com/photos/images/newsfeed/001/220/426/e44.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.yaoi`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://i.pinimg.com/originals/00/a0/41/00a04108c1d9d5115fd2d13cc525924f.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://pa1.narvii.com/5784/62e791a69aec4cdf94476823e5349c039fffdc74_hq.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://media3.giphy.com/media/117UiFNyf7lLyw/giphy.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://media2.giphy.com/media/Z6ifX4I0TC5I4/giphy.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://68.media.tumblr.com/b7e83b12c14a93c7a72a50f97461578b/tumblr_onq3pnBNHi1vs4kyjo1_500.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.yuri`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572151132995059732/tenor.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://i.pinimg.com/originals/07/28/db/0728db11c7616a329bcc2fabe324491d.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://media0.giphy.com/media/qXHOq24Id1v9e/giphy.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://thumbs.gfycat.com/TatteredOrnateLaughingthrush-size_restricted.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://data.whicdn.com/images/98077221/original.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.octogone`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://66.media.tumblr.com/00adce6cac552d1126167f58628261bf/tumblr_pcrejxWhIh1usyygio2_400.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572150439018233888/1.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572153110798139422/1.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`http://66.media.tumblr.com/29778bf6e96d8424df02e0df22642e16/tumblr_nx5i5uVV0l1rvbl4vo7_540.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://media0.giphy.com/media/J0C5WPIhnfTQQ/giphy.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://i.gifer.com/TqQL.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.loli`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://image.noelshack.com/fichiers/2019/17/1/1555964709-tenor.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/569990070908485668/1.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/569994492048834590/1.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/569993106112512002/1.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/569991047493451779/1.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/570355611376550015/1.gif`);
        console.log(randnum);
 }   

} 

   if (message.content.startsWith(`.cry`)) {
      random();   

       if (randnum == 0){
           message.channel.send(`http://66.media.tumblr.com/tumblr_m8ojbcznQ61rz5p5po3_500.gif`);
          console.log(randnum);
        }  else if (randnum == 1){
           message.channel.send(`https://66.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_inline_or4whcrg1z1ueut6r_540.gif`);
           console.log(randnum);
         }  else if (randnum == 2){
           message.channel.send(`https://media.giphy.com/media/Jt5rqhLQ6oOr4Jscog/giphy.gif`);
           console.log(randnum);
         }  else if (randnum == 3){
            message.channel.send(`https://risibank.fr/cache/stickers/d1236/123624-full.gif`);
            console.log(randnum);
         }  else if (randnum == 4){
            message.channel.send(`https://media1.tenor.com/images/5f1c93699e3d7e430674beda00bad1f5/tenor.gif?itemid=5455579`);
            console.log(randnum);
          }  else if (randnum == 5){
            message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572146690774269966/1.gif`);
            console.log(randnum);
     }   

  }
  
  if (message.content.startsWith(`.fuck`)) {
    random();   

     if (randnum == 0){
         message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572391161050824705/tenor.gif`);
        console.log(randnum);
      }  else if (randnum == 1){
         message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572391163361755152/d.gif`);
         console.log(randnum);
       }  else if (randnum == 2){
         message.channel.send(`https://i.gifer.com/JlQz.gif`);
         console.log(randnum);
       }  else if (randnum == 3){
          message.channel.send(`https://thumbs.gfycat.com/AcademicCavernousArchaeopteryx-size_restricted.gif`);
          console.log(randnum);
       }  else if (randnum == 4){
          message.channel.send(`https://media.giphy.com/media/OIF4hRTQlpKgw/giphy.gif`);
          console.log(randnum);
        }  else if (randnum == 5){
          message.channel.send(`https://media.giphy.com/media/123lNjR1VHr1ao/giphy.gif`);
          console.log(randnum);
   }   

} 

if (message.content.startsWith(`.kiss`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://media3.giphy.com/media/FqBTvSNjNzeZG/giphy.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572393271398105108/tenor.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://media2.giphy.com/media/kU586ictpGb0Q/giphy.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://66.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://uploads.disquscdn.com/images/964bd0189d1674220997816c271470bf5f2c32860ee5bcf63d50031fbc82a0cd.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://i.imgur.com/eisk88U.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.lick`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572393547425120272/tenor.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://thumbs.gfycat.com/SomberUnderstatedAnophelesmosquito-size_restricted.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572394256640114709/tenor.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572394869524398090/tenorv.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572394879276154910/v.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572395317173944320/v_2.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.kawaii`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572167384484413444/1.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://data.whicdn.com/images/327118261/original.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://gifimage.net/wp-content/uploads/2017/11/gif-anime-kawaii-11.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://media2.giphy.com/media/11abxmfNqC8o00/giphy.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://thumbs.gfycat.com/ImpressiveHandsomeAiredaleterrier-small.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://66.media.tumblr.com/tumblr_mbj9xabY091rni0w9o1_r1_500.gif`);
        console.log(randnum);
 }   

} 

if (message.content.startsWith(`.pat`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif`);
      console.log(randnum);
    }  else if (randnum == 1){
       message.channel.send(`https://i.imgur.com/2lacG7l.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://i.imgur.com/4ssddEQ.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572396901186404352/vvv.gif`);
        console.log(randnum);
     }  else if (randnum == 5){
        message.channel.send(`https://cdn.discordapp.com/attachments/568118396676341800/572396902125928448/vv.gif`);
        console.log(randnum);
 }   

}   
    
if (message.content.startsWith(`.cat`)) {
  random();   

   if (randnum == 0){
       message.channel.send(`http://25.media.tumblr.com/e60f80a75e70a30a9daeac0a80a6a7cc/tumblr_n1u8pk2OAM1trao0wo1_500.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://static.fjcdn.com/gifs/Anime_ebb757_5470536.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`http://24.media.tumblr.com/4f527f91cac82b39c1956c6e3f771555/tumblr_mqeregZSR21sv98gio1_500.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://i.pinimg.com/originals/3a/46/19/3a4619e53f091dc9dd51d6c92d624b00.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://media.giphy.com/media/wfBTUKEYpCcNi/giphy.gif`);
        console.log(randnum);
     }  else if (randnum == 5){
        message.channel.send(`https://thumbs.gfycat.com/OrnerySlipperyGenet-size_restricted.gif`);
        console.log(randnum);
 }   

}   


if (message.content.startsWith(`.neko`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://24.media.tumblr.com/47008dfaff99a408c8c16d71180757b1/tumblr_mpzvohOvNW1raqwzdo1_500.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://i.kym-cdn.com/photos/images/original/000/936/930/bc4.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`https://media1.giphy.com/media/UfZR37U3uqsTe/giphy.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`http://emeraude1977.e.m.pic.centerblog.net/f5169382.gif`);
        console.log(randnum);
     }  else if (randnum == 4){
        message.channel.send(`https://i.pinimg.com/originals/76/65/37/766537b607d97b8822ecf3d484b81ca3.gif`);
        console.log(randnum);
     }  else if (randnum == 5){
       message.channel.send(`https://media1.tenor.com/images/37a585471f5e895489a03ae705430218/tenor.gif?itemid=12142150`);
        console.log(randnum);
 }   

}   

if (message.content.startsWith(`.dance`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://media.giphy.com/media/9gxhLXyJXqAhi/giphy-downsized-large.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://img.fireden.net/a/image/1472/69/1472691290793.gif`);
       console.log(randnum);
     }  else if (randnum == 2){
       message.channel.send(`http://static.fjcdn.com/gifs/Dance_059348_5568820.gif`);
       console.log(randnum);
     }  else if (randnum == 3){
        message.channel.send(`https://thumbs.gfycat.com/RepulsiveCompassionateFrenchbulldog-size_restricted.gif`);
        console.log(randnum);
      }  else if (randnum == 4){
        message.channel.send(`https://i.gifer.com/embedded/download/7A1e.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://data.whicdn.com/images/303436367/original.gif`);
        console.log(randnum);
 }   

}    

if (message.content.startsWith(`.smile`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://media3.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://media3.giphy.com/media/LML5ldpTKLPelFtBfY/giphy.gif`);
       console.log(randnum);
      }  else if (randnum == 2){
       message.channel.send(`https://media3.giphy.com/media/hRfgaMmfemUdG/giphy.gif`);
       console.log(randnum);
      }  else if (randnum == 3){
        message.channel.send(`http://www.gifimili.com/gif/2018/02/monkey-d-luffy-sourire.gif`);
        console.log(randnum);
      }  else if (randnum == 4){
        message.channel.send(`https://media0.giphy.com/media/hOVjFUBGhYoCY/source.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://media1.giphy.com/media/1dLjBU7jUenBZbu0nw/source.gif`);
        console.log(randnum);
 }   

}   

if (message.content.startsWith(`.laugh`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://media.giphy.com/media/tnxOOIUL0BCLe/giphy.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://data.whicdn.com/images/280502932/original.gif`);
       console.log(randnum);
      }  else if (randnum == 2){
       message.channel.send(`https://media.tenor.com/images/b92a29ad9c6dbb13e9d90ac8362657d3/tenor.gif`);
       console.log(randnum);
      }  else if (randnum == 3){
        message.channel.send(`https://media3.giphy.com/media/Yb0sZcOCQdG36/giphy.gif`);
        console.log(randnum);
      }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572911067362099364/tenor.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://media.giphy.com/media/8maVEb9ZMvdrq/giphy.gif`);
        console.log(randnum);
 }   

}   

if (message.content.startsWith(`.creepy`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572908887922180136/1_1.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572908909409337379/1_2.gif`);
       console.log(randnum);
      }  else if (randnum == 2){
       message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572909315866886164/1_3.gif`);
       console.log(randnum);
      }  else if (randnum == 3){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572914584176951296/1_5.gif`);
        console.log(randnum);
      }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572914599167393793/1_4.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/572915291110244352/1_6.gif`);
        console.log(randnum);
 }   

}   

if (message.content.startsWith(`.jail`)) {
  random(); 

  if (randnum == 0){
       message.channel.send(`https://media1.giphy.com/media/l0HlxAqevo9mKD3UY/source.gif`);
       console.log(randnum);
      }  else if (randnum == 1){
       message.channel.send(`https://data.whicdn.com/images/111155726/original.gif`);
       console.log(randnum);
      }  else if (randnum == 2){
       message.channel.send(`http://nrpg-triunfoshinobi.weebly.com/uploads/2/3/2/5/23255148/2444174_orig.gif`);
       console.log(randnum);
      }  else if (randnum == 3){
        message.channel.send(`https://i.gifer.com/Vwx.gif`);
        console.log(randnum);
      }  else if (randnum == 4){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/573251864397611038/20190501_225018.gif`);
        console.log(randnum);
      }  else if (randnum == 5){
        message.channel.send(`https://cdn.discordapp.com/attachments/373595246056964106/573252117796487173/20190501_225524.gif`);
        console.log(randnum);
 }   

}   


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
if (message.content.startsWith(`${prefix}skribbl`)) {
    message.channel.send(`https://skribbl.io/`);
  }  else if (message.content.startsWith(`${prefix}limit`)) {
    message.channel.send(`https://limitelimiteenligne.com/#/choose`);
  }  else if (message.content.startsWith(`${prefix}bac`)) {
    message.channel.send(`https://petitbacenligne.net/new-game.xhtml`);
  }               
    
    
    if (message.content === ".dice"){
      random();   

       if (randnum == 0){
           message.reply("1");
          console.log(randnum);
        }  else if (randnum == 1){
           message.reply("2");
           console.log(randnum);
          }  else if (randnum == 2){
           message.reply("3");
           console.log(randnum);
          }  else if (randnum == 3){
            message.reply("4");
            console.log(randnum);
          }  else if (randnum == 4){
            message.reply("5");
            console.log(randnum);
          }  else if(randnum == 5){
            message.reply("6");
            console.log(randnum);
        }   

  }
       
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
   
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Gros retourne sur Tera et me fait pas chier :middle_finger: ", "Pas d'avis :shrug: ", "Balec :face_palm:", "Faut pas rêver", "C'est non :frowning: ", "Impossible :no_good:", "N'y compte pas dechet :recycle: ", "Tu peux compter dessus :upside_down: ", "Sans aucun doute :no_mouth: ", "D'après moi oui gros", "Une chance sur deux", "Gros j'ai pas ton temps ,j'ai un taff moi!", "Ouais gros"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("PURPLE")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  if (message.content === ".help") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Voici les commandes du bot :eyes:" ,  "Voici le menu Help :question: ")
      .addBlankField(true)
      .addField("Pour les commandes ciblées :information_desk_person:" , ".help-1")
      .addField("Déscription :" , "Ces commandes désigne des connaissances du créateur.")
      .addBlankField(true)
      .addField("Pour les commandes fun :put_litter_in_its_place:" , ".help-2")
      .addField("Déscription :" , "Ces commandes peuvent servir dans certaines situations.")
      .addBlankField(true)
      .addField("Pour les commandes pour jouer :video_game:" , ".help-3")
      .addField("Déscription :" , "Ces commandes sont utile pour certain jeu proposer par le bot ou en ligne.")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help demandée !");

  }

    
  if (message.content === ".help-1") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes ciblées " , ".yami.cora .illya .xam .golden ")
      .addField("Les commandes ciblées 2" , ".louhan .chou .kaisa .lucy .tezer .milord")
    message.channel.sendEmbed(help_embed);
    console.log("commande Help1 demandée !");
      
  }

    
  if (message.content === ".help-2") {
    var help_embed = new Discord.RichEmbed()
      .setColor("#B638FF")
      .addField("Les commandes fun" , ".ping .ching .anime .avatar .pute .tera")
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
