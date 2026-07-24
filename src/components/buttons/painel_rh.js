const { ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');

module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        
        // Menu para o Admin escolher o canal
        const channelSelect = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('select_canal_recrutamento')
                .setPlaceholder('📍 Selecione o canal para enviar a Vitrine de Recrutamento')
                .addChannelTypes(ChannelType.GuildText)
        );

        // Botão de Voltar
        const btnVoltar = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_page_main')
                .setLabel('Voltar')
                .setStyle(ButtonStyle.Secondary)
        );

        // PADRÃO COMPONENTS V2: Usamos 'flags' com IS_COMPONENTS_V2 e 'Text Display' (type: 10) em vez de 'content'
        await interaction.update({
            flags: MessageFlags.IsComponentsV2, // Equivalente a 1 << 15 (32768)
            components: [
                {
                    type: 10, // Text Display Component
                    content: '💼 **PAINEL DE RECURSOS HUMANOS**\n\nGerencie as contratações da sua Facção. Escolha abaixo o canal público onde os moradores poderão aplicar para o recrutamento.'
                },
                channelSelect,
                btnVoltar
            ]
        });
    }
};