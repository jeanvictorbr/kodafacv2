const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    console.log('🔄 [SISTEMA] Dando start no motor Tropa da Koda...');

    // 1. Carregar Eventos
    const eventsPath = path.join(__dirname, '../events');
    const eventFiles = fs.readdirSync(eventsPath).filter(f => f.endsWith('.js'));
    
    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
    console.log(`✅ [LOADER] ${eventFiles.length} Eventos armados.`);

    // 2. Carregar Comandos (/painel)
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.data.name, command);
    }
    console.log(`✅ [LOADER] ${commandFiles.length} Comandos engatilhados.`);

    // 3. Carregar Componentes (Botões, Modais, Selects)
    const componentsPath = path.join(__dirname, '../components');
    if (fs.existsSync(componentsPath)) {
        let compCount = 0;
        const folders = fs.readdirSync(componentsPath);
        
        for (const folder of folders) {
            const folderPath = path.join(componentsPath, folder);
            // Ignora se não for pasta
            if (!fs.statSync(folderPath).isDirectory()) continue; 
            
            const compFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.js'));
            for (const file of compFiles) {
                const component = require(`${folderPath}/${file}`);
                
                // O nome do arquivo (sem .js) vira o customId automaticamente!
                // Ex: painel_rh.js responde ao custom_id "painel_rh"
                const customId = file.split('.')[0]; 
                client.components.set(customId, component);
                compCount++;
            }
        }
        console.log(`✅ [LOADER] ${compCount} Componentes mapeados (Roteamento Cego).`);
    }
};