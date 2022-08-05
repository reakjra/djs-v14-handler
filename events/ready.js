const Client = require('../index').Client
const Discord = require('discord.js')
const config = require('../config.json')

Client.on('ready', async() => {

    console.log(`Logged in as ${Client.user.tag}!`)
    
  let data = Client.SlashCmds

  let filt1 = data.filter(c => c.Globally == true)
           
  await Client.application?.commands.set(filt1)
           
  let filt2 = data.filter(c => c.Globally == false)
            
  await Client.guilds.cache.get(config.testGuildId).commands.set(filt2)            
            
})

