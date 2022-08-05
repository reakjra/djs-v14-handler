const Discord = require('discord.js')

module.exports = {
    name: 'echo',
    description: 'Echo the message',
    Globally: false,
    Permissions: [Discord.PermissionFlagsBits.SendMessages],
    options: [{
        name: 'message',
        description: 'The message to echo',
        type: Discord.ApplicationCommandOptionType.String,
        required: true
    }],

    run: async (Client, inter) => {

        inter.reply({content: inter.options.getString('message'), ephemeral: true})
    
    }

}