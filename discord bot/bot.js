const { Client, IntentsBitField } = require('discord.js');
const fs=require('fs');

const client = new Client({ intents: [
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent,
], });
require('dotenv').config();
client.on("ready",()=>{
    console.log("bot is ready");
})
const add={
  link:''
}
client.on("messageCreate",(message)=>{
  const arr=message.content.split(":");
  add.link=arr[1];
  let name=arr[0]
  console.log("message recieved");
  fs.readFile('data.json','utf8',(err,data)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("data read");
      let obj=JSON.parse(data);

      if(arr[0]==="norman"){
        console.log(obj);
        obj.norman.push(add);
        let json=JSON.stringify(obj)
        fs.writeFile('data.json',json,err=>{
          console.log(err);
        })
      }
      else if(arr[0]==="macarthy"){
        console.log(obj);
        obj.macarthy.push(add);
        let json=JSON.stringify(obj)
        fs.writeFile('data.json',json,err=>{
          console.log(err);
        })
      }
      else if(arr[0]==="paush"){
        console.log(obj);
        obj.paush.push(add);
        let json=JSON.stringify(obj)
        fs.writeFile('data.json',json,err=>{
          console.log(err);
        })
      }
      else if(arr[0]==="satoshi"){
        console.log(obj);
        obj.satoshi.push(add);
        let json=JSON.stringify(obj)
        fs.writeFile('data.json',json,err=>{
          console.log(err);
        })
      }
      else if(arr[0]==="tesla"){
        console.log(obj);
        obj.tesla.push(add);
        let json=JSON.stringify(obj)
        fs.writeFile('data.json',json,err=>{
          console.log(err);
        })
      }
    }
  });
  
})
client.login(process.env.KEY);