const dotenv = require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client({ disableMentions: "everyone" });

client.on('ready', ()  => {
    console.log(`${client.user.username} is online!`)
})

client.on('message', async message => {
    const prefix = "!"

    // if(!message.content.startsWith(prefix)) return
    // if(message.content.split(" "))

    
})

client.login(process.env.BOT_TOKEN)