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

// Collections para o nosso novo sistema inteligente
client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

// Chama o núcleo que carrega tudo sozinho
coreLoader(client);

client.login(process.env.DISCORD_TOKEN);