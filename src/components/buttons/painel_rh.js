const { ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        // Menu para o Admin escolher onde o painel de recrutamento vai ficar
        const channelSelect = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('select_canal_recrutamento')
                .setPlaceholder('📍 Selecione o canal para enviar a Vitrine de Recrutamento')
                .addChannelTypes(ChannelType.GuildText)
        );

        // Botão para voltar ao menu principal
        const btnVoltar = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_page_main')
                .setLabel('Voltar')
                .setStyle(ButtonStyle.Secondary)
        );

        // Atualiza a mensagem do painel APENAS com texto clean e componentes
        await interaction.update({
            content: '💼 **PAINEL DE RECURSOS HUMANOS**\n\nGerencie as contratações da sua Facção. Escolha abaixo o canal público onde os moradores poderão aplicar para o recrutamento.',
            embeds: [], // Garantindo que não tem embed!
            components: [channelSelect, btnVoltar]
        });
    }
};