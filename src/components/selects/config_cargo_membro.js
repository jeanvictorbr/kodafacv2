const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_cargo_membro',
    async execute(interaction) {
        // Pega o ID do cargo selecionado
        const cargoId = interaction.values[0];

        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: { cargoMembro: cargoId }
        });

        // Refresh na tela
        const hubRecrutamento = require('../buttons/painel_rh_recrutamento');
        await hubRecrutamento.execute(interaction);
    }
}