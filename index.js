const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

function minDiff(d1, d2)
{
  d1 = d1.getTime() / 60000;
  d2 = d2.getTime() / 60000;
  return new Number(d2 - d1).toFixed(0);
}

function dayDiff(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}



client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "time") {
    var today = new Date();
    var olday = new Date("5 June 2021");

    var inter = minDiff(today, olday);
    var inter2 = dayDiff(today, olday);
    message.reply(`Il reste ${inter} minutes (${inter2} jours) avant de se suicider`);
}

if (command === "suicide") {
  message.reply(`C'est la solution logique`);
}

  if (command === "rebus") {
    
    let random = Math.floor((Math.random() * 9) + 1)
    switch (random){
      case 0 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2013/11/rebus-enfant-581.jpg"]});
      break;

      case 1 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2016/03/rebus-enfant-222.jpg"]});
      break; 

      case 2 : 
    message.channel.send("Bonne chance", {files: ["https://i.pinimg.com/originals/5d/21/10/5d21107f705032cac60e815f55c83ba8.jpg"]});
      break;

      case 3 : 
    message.channel.send("Bonne chance", {files: ["https://o1.ldh.be/image/thumb/571e254735708ea2d4e1cb90.jpg"]});
      break;

      case 4 : 
    message.channel.send("Bonne chance", {files: ["https://i.pinimg.com/originals/0d/f2/bc/0df2bc9a63dc79a88e5876c3f66d5f78.jpg"]});
      break;
      
      case 5 : 
    message.channel.send("Bonne chance", {files: ["https://i.pinimg.com/736x/73/90/e3/7390e37eec77d438d4d2ffc3021691af.jpg"]});
      break;

      case 6 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2013/04/rebus-enfant-15.jpg"]});
      break;
  
      case 7 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2013/04/rebus-enfant-16.jpg"]});
      break;

      case 8 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2015/11/rebus-enfant-200.jpg"]});
      break;
     
      case 9 : 
    message.channel.send("Bonne chance", {files: ["https://devinettedujour.com/wp-content/uploads/2013/06/rebus-enfant-43.jpg"]});
      break;
      
  }
  }
  
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});

client.login(config.BOT_TOKEN);

