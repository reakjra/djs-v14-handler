const Client = require('../index').Client
const Discord = require('discord.js')
const config = require('../config.json')

Client.on('ready', async() => {

    console.log(`Logged in as ${Client.user.tag}!`)

    let data = Client.SlashCmds

    data.map(async(cmd) => {

        if(cmd.Globally == true) {

             return await Client.application?.commands.set(data);
            
        } else if(cmd.Globally == false) {

           return await Client.guilds.cache.get(config.testGuildId).commands.set(data)            
           
        }
    })
})

