const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

module.exports = async (client) => {
    console.log('[SISTEMA] Iniciando o Coração Intocável...');

    const commandsArray = [];
    const commandsPath = path.join(__dirname, '../commands');
    
    // 1. Lendo os Comandos (Slash Commands)
    if (fs.existsSync(commandsPath)) {
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                console.log(`[CARREGADO] Comando: /${command.data.name}`);
            } else {
                console.log(`[AVISO] O comando ${file} está sem 'data' ou 'execute'.`);
            }
        }
    }

    // 2. Registrando os Comandos na API do Discord
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

    try {
        if (process.env.GUILD_TEST_ID) {
            console.log(`[REST] Registrando comandos localmente na Guild de Teste...`);
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_TEST_ID),
                { body: commandsArray }
            );
        } else {
            console.log(`[REST] Registrando comandos GLOBALMENTE...`);
            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commandsArray }
            );
        }
        console.log(`[REST] Comandos registrados com sucesso!`);
    } catch (error) {
        console.error(`[ERRO REST] Falha ao registrar comandos:`, error);
    }

    // 3. Lendo os Eventos (Ready, InteractionCreate, etc)
    const eventsPath = path.join(__dirname, '../events');
    if (fs.existsSync(eventsPath)) {
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
            console.log(`[CARREGADO] Evento: ${event.name}`);
        }
    }
};