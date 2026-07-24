const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'btn_aplicar_fac',
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('modal_recrutamento')
            .setTitle('Ficha de Recrutamento');

        const nomeInput = new TextInputBuilder()
            .setCustomId('nome_rp')
            .setLabel('Qual seu Nome Completo no RP?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ex: Zé Pequeno')
            .setRequired(true);

        const idInput = new TextInputBuilder()
            .setCustomId('passaporte')
            .setLabel('Qual seu Passaporte (ID)?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ex: 157')
            .setRequired(true);

        const motivoInput = new TextInputBuilder()
            .setCustomId('motivo')
            .setLabel('Por que quer fechar com a gente?')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Manda a visão do porquê você soma na fac...')
            .setRequired(true);

        modal.addComponents(
            new ActionRowBuilder().addComponents(nomeInput),
            new ActionRowBuilder().addComponents(idInput),
            new ActionRowBuilder().addComponents(motivoInput)
        );

        await interaction.showModal(modal);
    }
};