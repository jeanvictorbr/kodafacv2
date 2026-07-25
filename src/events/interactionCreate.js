// src/events/interactionCreate.js

module.exports = {
    // Nome do evento nativo do Discord
    name: 'interactionCreate',
    
    // Como é um evento que dispara toda hora, não colocamos "once: true"
    async execute(interaction, client) {
        
        // -----------------------------------------------------------------
        // ROTA 1: Tratando os Comandos de Barra (/painel)
        // -----------------------------------------------------------------
        if (interaction.isChatInputCommand()) {
            // Puxa o comando direto da nossa memória RAM
            const command = client.commands.get(interaction.commandName);
            
            // Se o comando não existir na memória, ignora pra não dar erro
            if (!command) return;

            try {
                // Executa a lógica do comando
                await command.execute(interaction, client);
            } catch (error) {
                console.error(`[ERRO] Falha ao executar o comando /${interaction.commandName}:`, error);
                // Resposta de segurança caso o bot dê pau no meio do processo
                await interaction.reply({ 
                    content: '❌ **Deu ruim!** Ocorreu um erro interno ao processar esse comando.', 
                    flags: 64 // Flag 64 = Ephemeral (Só quem digitou consegue ver)
                });
            }
        }
        
        // -----------------------------------------------------------------
        // ROTA 2: O Roteamento Cego (Botões, Modais e Menus)
        // -----------------------------------------------------------------
        else if (interaction.isButton() || interaction.isModalSubmit() || interaction.isStringSelectMenu()) {
            
            // Aqui tá a mágica: O customId do botão (ex: "rh_aprovar") é o exato nome do arquivo!
            const component = client.components.get(interaction.customId);
            
            if (!component) {
                // Se o botão não tem lógica cadastrada, a gente avisa e morre aqui.
                return interaction.reply({ 
                    content: '⚠️ **Ação não encontrada.** Esse botão parece estar desativado.', 
                    flags: 64 
                });
            }

            try {
                // Roda o arquivo responsável por aquele botão/modal específico
                await component.execute(interaction, client);
            } catch (error) {
                console.error(`[ERRO] Falha no componente ${interaction.customId}:`, error);
                await interaction.reply({ 
                    content: '❌ **Deu ruim!** Erro ao processar essa ação no sistema.', 
                    flags: 64 
                });
            }
        }
    }
};