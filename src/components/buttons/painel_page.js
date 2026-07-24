const { buildPainelPayload } = require('../../utils/painelBuilder');

module.exports = {
    customId: 'painel_page', // Nosso interceptador vai jogar tudo que começar com painel_page_ pra cá
    async execute(interaction) {
        const targetPage = parseInt(interaction.customId.split('_')[2]);
        const updatedPayload = buildPainelPayload(targetPage);

        await interaction.client.rest.post(
            `/interactions/${interaction.id}/${interaction.token}/callback`,
            { body: { type: 7, data: updatedPayload } }
        );
    }
};