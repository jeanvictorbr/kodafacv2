const prisma = require('../../database/prisma');

module.exports = {
    id: 'config_cargo_membro',
    name: 'config_cargo_membro',
    customId: 'config_cargo_membro',
    async execute(interaction, client) {
        const cargoId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { cargoMembro: cargoId },
            create: { 
                guildId: interaction.guildId, 
                cargoMembro: cargoId,
                nomeFac: interaction.guild.name // <-- SOLUÇÃO AQUI
            }
        });

        return interaction.reply({
            content: `✅ Padrão! Cargo de Membro setado para <@&${cargoId}>.`,
            flags: 64
        });
    }
};