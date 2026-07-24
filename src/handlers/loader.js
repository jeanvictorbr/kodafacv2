const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

module.exports = async (client) => {
    console.log('[SISTEMA] Iniciando o Coração Intocável...');

    const commandsArray = [];
    
    // 1. CARREGAR COMANDOS
    const commandsPath = path.join(__dirname, '../commands');
    if (fs.existsSync(commandsPath)) {
        const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.commands.set(command.data.name, command);
            commandsArray.push(command.data.toJSON());
        }
    }

    // 2. CARREGAR EVENTOS
    const eventsPath = path.join(__dirname, '../events');
    if (fs.existsSync(eventsPath)) {
        const eventFiles = fs.readdirSync(eventsPath).filter(f => f.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
            else client.on(event.name, (...args) => event.execute(...args, client));
        }
    }

    // 3. CARREGAR BOTÕES
    const buttonsPath = path.join(__dirname, '../components/buttons');
    if (fs.existsSync(buttonsPath)) {
        const buttonFiles = fs.readdirSync(buttonsPath).filter(f => f.endsWith('.js'));
        for (const file of buttonFiles) {
            const button = require(`../components/buttons/${file}`);
            client.buttons.set(button.customId, button);
        }
        console.log(`[CARREGADO] ${buttonFiles.length} Botões.`);
    }

    // 4. CARREGAR MODAIS (Formulários)
    const modalsPath = path.join(__dirname, '../components/modals');
    if (fs.existsSync(modalsPath)) {
        const modalFiles = fs.readdirSync(modalsPath).filter(f => f.endsWith('.js'));
        for (const file of modalFiles) {
            const modal = require(`../components/modals/${file}`);
            client.modals.set(modal.customId, modal);
        }
        console.log(`[CARREGADO] ${modalFiles.length} Modais.`);
    }
// Carregamento dos Select Menus
        const selectsPath = './src/components/selects';
        if (fs.existsSync(selectsPath)) {
            const selectFiles = fs.readdirSync(selectsPath).filter(file => file.endsWith('.js'));
            for (const file of selectFiles) {
                const select = require(`../components/selects/${file}`);
                if (select.customId) {
                    client.selects.set(select.customId, select);
                }
            }
        }
    // 5. REGISTRAR NA API
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    try {
        if (process.env.GUILD_TEST_ID) {
            await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_TEST_ID), { body: commandsArray });
            console.log(`[REST] Comandos registrados no Servidor de Teste.`);
        } else {
            await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commandsArray });
            console.log(`[REST] Comandos registrados GLOBALMENTE.`);
        }
    } catch (error) {
        console.error(`[ERRO REST]:`, error);
    }
};