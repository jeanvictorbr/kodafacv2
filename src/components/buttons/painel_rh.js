const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    // Esse customId tem que estar no botão "Explorar" do Gestão da Rapaziada no seu menu principal
    customId: 'painel_rh',
    async execute(interaction) {
        
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_rh_recrutamento')
                .setLabel('Recrutamento')
                .setEmoji('📋')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('painel_rh_ponto')
                .setLabel('Bater Ponto')
                .setEmoji('⏱️')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true) // Desabilitado por enquanto
        );

        const rowVoltar = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_page_main') // Ajuste para o ID do seu botão de voltar ao inicio
                .setLabel('Voltar ao QG')
                .setStyle(ButtonStyle.Secondary)
        );

        // Atualiza a mensagem tirando qualquer Embed e deixando o visual Clean de Quebrada
        await interaction.update({
            content: '## 📋 GESTÃO DA RAPAZIADA\nVisão, chefe! Aqui você gerencia os seus membros.\n\nEscolha qual sistema você quer configurar agora:',
            embeds: [], 
            components: [row, rowVoltar]
        });
    }
};