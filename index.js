const Discord = require('discord.js');
const fs = require('fs');
dotenv.config()

const Client = new Discord.Client({
    intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildIntegrations, Discord.GatewayIntentBits.GuildMembers]
})

Client.SlashCmds = new Discord.Collection()
Client.events = new Discord.Collection()
module.exports.Client = Client

// Events
fs.readdirSync('./events/').forEach(file => {
    let files = fs.readdirSync('./events/').filter(file => file.endsWith('.js'))
    if(files.length <= 0) return 

    files.forEach(event => {
        const getEvent = require(`./events/${event}`)
        try {
            Client.events.set(getEvent.name, getEvent);
        
        } catch(e) {
            return console.log(e)
        }
    })
})

// Slash Commands
fs.readdirSync('./SlashCommands/').forEach(dir => {
    fs.readdir(`./SlashCommands/${dir}`, (err, files) => {
        if(err) throw err;

        let sfiles = files.filter(f => f.endsWith('js'));
        if(sfiles.length <= 0) return;
        
        sfiles.forEach(file => {
            const getCommand = require(`./SlashCommands/${dir}/${file}`)
            try {
                Client.SlashCmds.set(getCommand.name, getCommand);
            } catch(e) {
                return console.log(e)
            }
        })

    })
})


Client.login('Your Bot Token')