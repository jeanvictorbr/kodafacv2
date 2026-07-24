const { ActionRowBuilder, ChannelSelectMenuBuilder, RoleSelectMenuBuilder, ChannelType, ButtonBuilder, ButtonStyle } = require('discord.js');
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        // Puxa do banco pra mostrar o status atual pro Chefe
        const faccao = await prisma.faccao.findUnique({ where: { guildId: interaction.guildId } });
        
        // 1. Configurar onde as fichas vão cair
        const selectDiretoria = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('config_canal_diretoria')
                .setPlaceholder('📍 Setar Canal da Diretoria (Onde chegam as fichas)')
                .addChannelTypes(ChannelType.GuildText)
        );

        // 2. Configurar qual cargo o novato ganha ao passar
        const selectCargo = new ActionRowBuilder().addComponents(
            new RoleSelectMenuBuilder()
                .setCustomId('config_cargo_membro')
                .setPlaceholder('🏅 Setar Cargo de Membro (Dado na aprovação)')
        );

        // 3. Botão para "spawnar" a vitrine pro público
        const rowAcoes = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('enviar_vitrine_recrutamento')
                .setLabel('Enviar Vitrine Estática (Pública)')
                .setEmoji('🖼️')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('painel_rh') // Botão para voltar aos submódulos do RH
                .setLabel('Voltar')
                .setStyle(ButtonStyle.Secondary)
        );

        // Monta o texto de status
        let statusTexto = `## 📋 CONFIGURAÇÃO: RECRUTAMENTO\nConfigure a engrenagem do seu recrutamento.\n\n**Status Atual:**`;
        
        statusTexto += faccao?.canalDiretoria 
            ? `\n🟢 **Sala da Diretoria:** <#${faccao.canalDiretoria}>` 
            : `\n🔴 **Sala da Diretoria:** Não configurada.`;
            
        statusTexto += faccao?.cargoMembro 
            ? `\n🟢 **Cargo de Aprovação:** <@&${faccao.cargoMembro}>` 
            : `\n🔴 **Cargo de Aprovação:** Não configurado.`;

        // Dá o update na tela
        await interaction.update({
            content: statusTexto,
            components: [selectDiretoria, selectCargo, rowAcoes]
        });
    }
};