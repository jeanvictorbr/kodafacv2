const prisma = require('../../database/prisma');

module.exports = {
    id: 'config_cargo_recrutador',
    name: 'config_cargo_recrutador',
    customId: 'config_cargo_recrutador',
    async execute(interaction, client) {
        const cargoId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { cargoRecrutador: cargoId },
            create: { 
                guildId: interaction.guildId, 
                cargoRecrutador: cargoId,
                nomeFac: interaction.guild.name // <-- SOLUÇÃO AQUI
            }
        });

        return interaction.reply({
            content: `✅ Padrão! Cargo de Recrutador setado para <@&${cargoId}>.`,
            flags: 64
        });
    }
};