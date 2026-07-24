const { SlashCommandBuilder } = require('discord.js');
const { buildPainelPayload } = require('../utils/painelBuilder');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão com paginação (V2 Components).'),

    async execute(interaction) {
        // Puxa a página 1 da nossa fábrica
        const rawPayload = buildPainelPayload(1);

        try {
            await interaction.client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                { body: { type: 4, data: rawPayload } } // type 4: Responder nova mensagem
            );
        } catch (error) {
            console.error('[ERRO V2 COMMAND]:', error);
        }
    },
};