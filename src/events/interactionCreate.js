module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        try {
            // 1. SLASH COMMANDS
            if (interaction.isChatInputCommand()) {
                const command = client.commands.get(interaction.commandName);
                if (command) await command.execute(interaction, client);
            }
            
            // 2. BOTÕES
            else if (interaction.isButton()) {
                let { customId } = interaction;
                
                // Trativa de paginação
                if (customId.startsWith('painel_page_')) customId = 'painel_page';
                
                const button = client.buttons.get(customId);
                if (button) {
                    await button.execute(interaction, client);
                } else {
                    await interaction.deferUpdate().catch(() => {});
                }
            }

// 3. SELECT MENUS (SISTEMA DE AUTO-CURA / LAZY LOADING)
            else if (interaction.isAnySelectMenu()) {
                let select = client.selects.get(interaction.customId);
                
                // ANTI-APAGÃO: Se a memória estiver vazia ([]), força a leitura dos arquivos
                if (!select) {
                    const fs = require('fs');
                    const path = require('path');
                    const selectsPath = path.join(__dirname, '../components/selects');
                    
                    if (fs.existsSync(selectsPath)) {
                        const selectFiles = fs.readdirSync(selectsPath).filter(file => file.endsWith('.js'));
                        for (const file of selectFiles) {
                            const req = require(`../components/selects/${file}`);
                            const fileNameId = file.replace('.js', '');
                            const identifier = req.customId || req.custom_id || req.id || req.name || fileNameId;
                            client.selects.set(identifier, req);
                        }
                    }
                    // Tenta resgatar novamente da memória recuperada
                    select = client.selects.get(interaction.customId);
                }

                if (select) {
                    await select.execute(interaction, client);
                } else {
                    console.error(`[FALHA CRÍTICA] Select '${interaction.customId}' não existe nos arquivos!`);
                    await interaction.deferUpdate().catch(() => {});
                }
            }
            // 4. MODAIS (Formulárdsaios)
            else if (interaction.isModalSubmit()) {
                const modal = client.modals.get(interaction.customId);
                if (modal) await modal.execute(interaction, client);
            }
            
        } catch (error) {
            console.error('[ERRO NA INTERAÇÃO]:', error);
            
            // Tratamento anti-vácuo
            const errorMessage = { content: '❌ Deu BO interno no bot. Tenta de novo ou chama o suporte.', flags: 64 };
            if (interaction.deferred || interaction.replied) {
                await interaction.followUp(errorMessage).catch(() => {});
            } else {
                await interaction.reply(errorMessage).catch(() => {});
            }
        }
    },
};