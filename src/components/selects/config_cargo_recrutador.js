const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_cargo_recrutador',
    async execute(interaction) {
        const cargoId = interaction.values[0];

        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: { cargoRecrutador: cargoId }
        });

        // Refresh na tela
        const hubRecrutamento = require('../buttons/painel_rh_recrutamento');
        await hubRecrutamento.execute(interaction);
    }
}