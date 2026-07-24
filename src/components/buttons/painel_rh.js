const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        const content = `
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

        await interaction.update({
            content: content,
            embeds: [], // ZERO EMBEDS STRICT
            components: [row]
        });
    }
}