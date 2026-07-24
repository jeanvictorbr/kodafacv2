const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        const textoMarkdown = `
# 📋 Gestão da Rapaziada | Recursos Humanos
> Salve, patrão! Aqui é o QG do RH. Controla quem entra, quem sai e quem trampa na facção.

**Módulos Disponíveis:**
* 🪖 **Recrutamento:** Setup de diretoria, formulários e aprovações.
* ⏳ **Ponto & Farm:** *(Em desenvolvimento)*

Selecione abaixo qual fita você quer adiantar agora:
        `.trim();

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_rh_recrutamento')
                .setLabel('Recrutamento')
                .setEmoji('🪖')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('painel_page_1') // Voltar para o painel principal
                .setLabel('Voltar')
                .setEmoji('⬅️')
                .setStyle(ButtonStyle.Danger)
        );

        // PADRÃO COMPONENTS V2 E TEXT DISPLAY
        await interaction.update({
            flags: 1 << 15, // MessageFlags.IsComponentsV2
            components: [
                {
                    type: 10, // Text Display Component
                    content: textoMarkdown
                },
                row.toJSON() // Convertido para JSON para mesclar com o Type 10
            ]
        });
    }
}