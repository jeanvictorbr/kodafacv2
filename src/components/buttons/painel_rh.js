const { buildRHPainelPayload } = require('../../utils/painelBuilder');

module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        await interaction.client.rest.post(
            `/interactions/${interaction.id}/${interaction.token}/callback`,
            { body: { type: 7, data: buildRHPainelPayload() } }
        );
    }
};