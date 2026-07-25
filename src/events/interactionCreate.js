module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        // --- 1. Roteamento de Comandos (Slash) ---
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(`[ERRO COMANDO] ${interaction.commandName}:`, error);
                await interaction.reply({ 
                    content: 'Deu ruim ao rodar esse comando, patrão. Tenta de novo.', 
                    flags: 64 // Ephemeral flag no padrão V2
                });
            }
        } 
        // --- 2. Roteamento Cego de Componentes (Botões, Modais, Selects) ---
        else if (interaction.isMessageComponent() || interaction.isModalSubmit()) {
            // Suporte a argumentos no customId (ex: aprovar_membro-12345)
            // Separamos pelo traço para pegar a rota base
            const [rota, ...args] = interaction.customId.split('-'); 
            
            const component = client.components.get(rota);
            
            if (!component) {
                // Se não achou o arquivo, ignora ou avisa
                return interaction.reply({
                    content: 'Componente não mapeado no sistema.',
                    flags: 64
                });
            }

            try {
                // Executa passando a interaction, o client e os possiveis argumentos extras
                await component.execute(interaction, client, args);
            } catch (error) {
                console.error(`[ERRO COMPONENTE] ${interaction.customId}:`, error);
                await interaction.reply({ 
                    content: 'Erro interno na interface da facção.', 
                    flags: 64 
                });
            }
        }
    }
};