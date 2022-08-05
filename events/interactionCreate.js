const Client = require("../index").Client
const { InteractionType } = require('discord.js')
const Discord = require('discord.js')

Client.on('interactionCreate', async inter => {

    if(inter.type == InteractionType.ApplicationCommand) {

        let slashCmds = Client.SlashCmds.get(inter.commandName)

        if(!slashCmds.Permissions) slashCmds.Permissions = []
        if(!inter.member.permissions.has(slashCmds.Permissions)) {

        let p = new Discord.PermissionsBitField(slashCmds.Permissions).toArray().join(', ')

       return inter.reply({content: `You don't have the required permissions to use this command. \n > ${p} `, ephemeral: true})
    }

        
        if(slashCmds) slashCmds.run(Client, inter)
    }
})