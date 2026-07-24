const { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');

module.exports = {
    customId: 'executar_envio_vitrine_publica',
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const canalId = interaction.values[0];
        const canal = interaction.guild.channels.cache.get(canalId);

        if (!canal) return interaction.editReply({ content: '❌ Canal público não encontrado.' });

        // Botão para o cidadão abrir a ficha
        const rowBotao = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('btn_aplicar_fac')
                .setLabel('📋 PREENCHER FICHA DE RECRUTAMENTO')
                .setStyle(ButtonStyle.Success)
        );

        // Envia a vitrine pública no padrão Components V2
        await canal.send({
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: 10,
                    content: '## 🔫 RECRUTAMENTO ABERTO\nAcha que tem disposição pra somar de verdade com a nossa facção?\n\nClique no botão abaixo para preencher o seu formulário e aguarde a chamada da diretoria.'
                },
                rowBotao
            ]
        });

        await interaction.editReply({ content: `✅ Vitrine estática enviada com sucesso para <#${canalId}>!` });
    }
};