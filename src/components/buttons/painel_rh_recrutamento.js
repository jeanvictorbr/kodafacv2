const { ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        const faccao = await prisma.faccao.findUnique({ where: { guildId: interaction.guildId } });
        
        const selectDiretoria = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('config_canal_diretoria')
                .setPlaceholder('📍 Setar Canal da Diretoria (Onde chegam as fichas)')
                .addChannelTypes(ChannelType.GuildText)
        );

        const rowAcoes = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('enviar_vitrine_recrutamento')
                .setLabel('Enviar Vitrine Estática (Pública)')
                .setEmoji('🖼️')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('painel_rh')
                .setLabel('Voltar')
                .setStyle(ButtonStyle.Secondary)
        );

        let statusTexto = `## 📋 CONFIGURAÇÃO: RECRUTAMENTO\nConfigure a engrenagem do seu recrutamento.\n\n**Status Atual:**`;
        
        statusTexto += faccao?.canalDiretoria 
            ? `\n🟢 **Sala da Diretoria:** <#${faccao.canalDiretoria}>` 
            : `\n🔴 **Sala da Diretoria:** Não configurada.`;

        await interaction.update({
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: 10,
                    content: statusTexto
                },
                selectDiretoria,
                rowAcoes
            ]
        });
    }
};