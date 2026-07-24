const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_cargo_recrutador',
    async execute(interaction, client) {
        const cargoId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { cargoRecrutador: cargoId },
            create: { guildId: interaction.guildId, cargoRecrutador: cargoId }
        });

        return interaction.reply({
            content: `✅ Cargo de Recrutador configurado para <@&${cargoId}>!`,
            flags: 64
        });
    }
};