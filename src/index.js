require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
});

client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

coreLoader(client);

client.login(process.env.DISCORD_TOKEN);