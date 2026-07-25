// src/core/handler.js
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

async function loadCommands(client) {
    const commandsArray = [];
    const commandsPath = path.join(__dirname, '../commands');
    
    if (!fs.existsSync(commandsPath)) fs.mkdirSync(commandsPath, { recursive: true });

    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
            commandsArray.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

    try {
        if (process.env.TEST_GUILD_ID) {
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.TEST_GUILD_ID),
                { body: commandsArray },
            );
        } else {
            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commandsArray },
            );
        }
    } catch (error) {
        console.error('❌ Erro ao registrar comandos:', error);
    }
}

// NOVO: Carrega os botões e modais pra memória RAM
async function loadComponents(client) {
    const componentsPath = path.join(__dirname, '../components');
    
    // Cria a pasta se não existir pra evitar erro
    if (!fs.existsSync(componentsPath)) fs.mkdirSync(componentsPath, { recursive: true });

    const componentFiles = fs.readdirSync(componentsPath).filter(file => file.endsWith('.js'));

    for (const file of componentFiles) {
        const filePath = path.join(componentsPath, file);
        const component = require(filePath);
        
        // O nome do arquivo (sem o .js) vira o ID da rota na nossa memória!
        const componentName = file.split('.')[0]; 
        client.components.set(componentName, component);
    }
    
    console.log(`🧠 Roteamento Cego ativo: ${componentFiles.length} componentes carregados na RAM.`);
}

module.exports = { loadCommands, loadComponents };