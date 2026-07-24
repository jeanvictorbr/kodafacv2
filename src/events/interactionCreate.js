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

            // 3. SELECT MENUS (Captura String, Channel, Role, User, Mentionable)
            else if (interaction.isAnySelectMenu()) {
                const select = client.selects.get(interaction.customId);
                if (select) {
                    await select.execute(interaction, client);
                } else {
                    console.log(`[AVISO] Select Menu não encontrado: ${interaction.customId}`);
                    await interaction.deferUpdate().catch(() => {});
                }
            }

            // 4. MODAIS (Formulários)
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