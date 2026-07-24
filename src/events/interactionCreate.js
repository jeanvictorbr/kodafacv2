// src/events/interactionCreate.js
module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        // Se for um Slash Command
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'Deu ruim ao executar esse comando, chefe.', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'Deu ruim ao executar esse comando, chefe.', ephemeral: true });
                }
            }
        }
        
        // Se for o clique de um Botão (Otimização pra não cair a interação)
        else if (interaction.isButton()) {
            // O deferUpdate() avisa o Discord pra não cancelar a interação por timeout
            // await interaction.deferUpdate(); 
            
            // Aqui depois vamos puxar o handler de botões!
            console.log(`O botão ${interaction.customId} foi clicado!`);
        }
    },
};