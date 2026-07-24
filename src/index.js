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

// Collections essenciais
client.commands = new Collection();
client.buttons = new Collection(); 

// Chama o nosso núcleo inteligente
coreLoader(client);

// Liga o bot
client.login(process.env.DISCORD_TOKEN);