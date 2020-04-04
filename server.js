require("dotenv").config();

    const Discord = require("discord.js");
    const client = new Discord.Client();
    const prefix = "*";
  
    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);      //prints in console to ensure bot initiation
    });

    client.on("message", async message => {
      
      if (message.content === prefix + "help"){
        message.reply("here's what we got \n fatso \n hobbit \n nazgul \n fortuna \n march \n leave \n seeya");
      }
      
      if (message.content === prefix + "fatso") {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();   // join channel of commander
          const dispatcher = await connection.play("https://cdn.glitch.com/080c0c9e-1834-4bf5-9dbb-81009ef810cd%2Ftuba.mp3?v=1585280499111", {volume: 1.0});  //tuba file and vol (1.0 = 100%)
          dispatcher.on("finish", () => {
            console.log("Finished playing");
            connection.disconnect();    // when done playing disconnect from vc
          });
        } else{
          message.reply("join vc")
        }
      } 
      
      if (message.content === prefix + "hobbit"){
        if (message.member.voice.channel){
        const connection = await message.member.voice.channel.join();   // join channel of commander
        const dispatcher = await connection.play("https://cdn.glitch.com/080c0c9e-1834-4bf5-9dbb-81009ef810cd%2Ftaking%20the%20hobbits%20to%20isengard.mp3?v=1585356458540", {volume: 1.0}); // hobbit file and vol (1.0 = 100%)
        dispatcher.on("finish", () => {
          console.log("Finished playing");
          connection.disconnect();   // when done playing disconnect from vc
        });
        } else {
          message.reply("join vc")
        }
      }
      
      if (message.content === prefix + "nazgul"){
        if (message.member.voice.channel){
        const connection = await message.member.voice.channel.join();   // join channel of commander
        const dispatcher = await connection.play("https://cdn.glitch.com/080c0c9e-1834-4bf5-9dbb-81009ef810cd%2FThe%20Nazgul's%20MarchTheme.mp3?v=1585520177769", {volume: 1.0}); // nazgul file and vol (1.0 = 100%)
        dispatcher.on("finish", () => {
          console.log("Finished playing");
          connection.disconnect();   // when done playing disconnect from vc
        });
        } else {
          message.reply("join vc")
        }
      }
      
      if (message.content === prefix + "fortuna"){
        if (message.member.voice.channel){
        const connection = await message.member.voice.channel.join();   // join channel of commander
        const dispatcher = await connection.play("https://cdn.glitch.com/080c0c9e-1834-4bf5-9dbb-81009ef810cd%2FCarl%20Orff%20-%20O%20Fortuna%20Carmina%20Burana.mp3?v=1585520133201", {volume: 1.0}); // fortuna file and vol (1.0 = 100%)
        dispatcher.on("finish", () => {
          console.log("Finished playing");
          connection.disconnect();   // when done playing disconnect from vc
        });
        } else {
          message.reply("join vc")
        }
      }
      
      if (message.content === prefix + "march"){
        if (message.member.voice.channel){
        const connection = await message.member.voice.channel.join();   // join channel of commander
        const dispatcher = await connection.play("https://cdn.glitch.com/080c0c9e-1834-4bf5-9dbb-81009ef810cd%2FRed%20Alert%20Hell%20March%20HQ.mp3?v=1585520131649", {volume: 1.0}); // march file and vol (1.0 = 100%)
        dispatcher.on("finish", () => {
          console.log("Finished playing");
          connection.disconnect();   // when done playing disconnect from vc
        });
        } else {
          message.reply("join vc")
        }
      }
      
      if (message.content === prefix + "seeya"){
        if (message.member.hasPermission("BAN_MEMBERS") ){
          // member object thru mentions
        var member= message.mentions.members.first();
          message.guild.members.ban(member)
          //success
  .then(user =>  message.channel.send(":wave: " + member.displayName + " has been banned. :point_right: "))
  .catch(() =>{
             // Fail
            message.channel.send("!ASK TROY FOR PERMISSION!");
        });
      }
    }              
                        
      if (message.content === prefix + "leave"){
        const disconnection = message.member.voice.channel.leave();
        disconnection.disconnect();
      }
  });

client.login(process.env.SECRET);
