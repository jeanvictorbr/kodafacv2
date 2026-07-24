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
                
                // Truque pra paginação: se o ID for "painel_page_2", ele corta pra procurar o arquivo "painel_page"
                if (customId.startsWith('painel_page_')) customId = 'painel_page';
                
                const button = client.buttons.get(customId);
                if (button) {
                    await button.execute(interaction, client);
                } else {
                    // Se o botão não existir nos arquivos, só ignora pra não dar erro vermelho
                    await interaction.deferUpdate().catch(() => {});
                }
            }

            // 3. MODAIS (Formulários)
            else if (interaction.isModalSubmit()) {
                const modal = client.modals.get(interaction.customId);
                if (modal) await modal.execute(interaction, client);
            }
            
        } catch (error) {
            console.error('[ERRO NA INTERAÇÃO]:', error);
        }
    },
};