const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_canal_diretoria',
    async execute(interaction, client) {
        const canalId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { canalDiretoria: canalId },
            create: { guildId: interaction.guildId, canalDiretoria: canalId }
        });

        return interaction.reply({
            content: `✅ Canal da Diretoria configurado para <#${canalId}>!`,
            flags: 64
        });
    }
};