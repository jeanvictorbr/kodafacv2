require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const loadEverything = require('./handlers/loader');

// Intent de Guilds é suficiente, já que vamos operar via Slash Commands e Interações.
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Cache em memória O(1) para roteamento ultrarrápido
client.commands = new Collection();
client.components = new Collection(); // Guarda botões, modais e selects

// Chama o Loader Cego
loadEverything(client);

client.login(process.env.TOKEN);