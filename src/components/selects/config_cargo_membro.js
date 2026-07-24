const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_cargo_membro',
    async execute(interaction, client) {
        const cargoId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { cargoMembro: cargoId },
            create: { guildId: interaction.guildId, cargoMembro: cargoId }
        });

        return interaction.reply({
            content: `✅ Cargo de Membro configurado para <@&${cargoId}>!`,
            flags: 64
        });
    }
};