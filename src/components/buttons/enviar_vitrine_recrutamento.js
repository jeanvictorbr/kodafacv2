const { ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, MessageFlags } = require('discord.js');

module.exports = {
    customId: 'enviar_vitrine_recrutamento',
    async execute(interaction) {
        const selectCanalPublico = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('executar_envio_vitrine_publica')
                .setPlaceholder('📢 Selecione onde enviar a Vitrine Pública')
                .addChannelTypes(ChannelType.GuildText)
        );

        await interaction.update({
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: 10,
                    content: '📢 **SELECIONE O CANAL PÚBLICO**\nEscolha abaixo em qual canal a mensagem estática de recrutamento será postada para os cidadãos aplicarem:'
                },
                selectCanalPublico
            ]
        });
    }
};