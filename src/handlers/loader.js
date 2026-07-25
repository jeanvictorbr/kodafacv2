const fs = require('fs');
const path = require('path');
const { REST, Routes, Collection } = require('discord.js');

module.exports = async (client) => {
    console.log('[SISTEMA] Iniciando o Coração Intocável...');

    if (!client.commands) client.commands = new Collection();
    if (!client.buttons) client.buttons = new Collection();
    if (!client.modals) client.modals = new Collection();
    if (!client.selects) client.selects = new Collection();

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
        let btnCount = 0;
        const buttonFiles = fs.readdirSync(buttonsPath).filter(f => f.endsWith('.js'));
        for (const file of buttonFiles) {
            const button = require(`../components/buttons/${file}`);
            const fileNameId = file.replace('.js', '');
            const btnId = button.customId || button.custom_id || button.id || button.name || fileNameId;
            if (btnId) {
                client.buttons.set(btnId, button);
                btnCount++;
            }
        }
        console.log(`[CARREGADO] ${btnCount} Botões na memória.`);
    }

    // 4. CARREGAR MODAIS
    const modalsPath = path.join(__dirname, '../components/modals');
    if (fs.existsSync(modalsPath)) {
        let modalCount = 0;
        const modalFiles = fs.readdirSync(modalsPath).filter(f => f.endsWith('.js'));
        for (const file of modalFiles) {
            const modal = require(`../components/modals/${file}`);
            const fileNameId = file.replace('.js', '');
            const modalId = modal.customId || modal.custom_id || modal.id || modal.name || fileNameId;
            if (modalId) {
                client.modals.set(modalId, modal);
                modalCount++;
            }
        }
        console.log(`[CARREGADO] ${modalCount} Modais na memória.`);
    }

    // 5. CARREGAR SELECT MENUS (BLINDAGEM SUPREMA)
    const selectsPath = path.join(__dirname, '../components/selects');
    if (fs.existsSync(selectsPath)) {
        let selectCount = 0;
        const selectFiles = fs.readdirSync(selectsPath).filter(file => file.endsWith('.js'));
        for (const file of selectFiles) {
            const select = require(`../components/selects/${file}`);
            
            // O pulo do gato: Extrai o nome do arquivo sem a extensão
            const fileNameId = file.replace('.js', '');
            
            // Mapeia todas as cSASDASDhaves possíveis e usa o NOME DO ARQUIVO como backup absoluto
            const identifier = select.customId || select.custom_id || select.id || select.name || fileNameId;
            
            client.selects.set(identifier, select);
            selectCount++;
        }
        console.log(`[CARREGADO] ${selectCount} Selects (Garantidos na Memória).`);
    }

    // 6. REGISTRAR NA APIss
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