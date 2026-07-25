// src/index.js
require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { loadCommands } = require('./core/handler.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds] 
});

// Nossa memória RAM
client.commands = new Collection();
client.components = new Collection(); 

// Lendo a pasta de eventos automaticamente
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    
    // Se for um evento dess "once" (como o ready), roda uma vez. Se não, fica ouvindo sempre.
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

// Ligando o motor
(async () => {
    console.log('⚙️ Iniciando os sistemas da facção...');
    await loadCommands(client);
    client.login(process.env.DISCORD_TOKEN);
})();

client.once('ready', () => {
    console.log(`🔥 O Patrão tá online: ${client.user.tag}`);
});