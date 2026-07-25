const prisma = require('../../database/prisma');

module.exports = {
    id: 'config_canal_diretoria',
    name: 'config_canal_diretoria',
    customId: 'config_canal_diretoria',
    async execute(interaction, client) {
        const canalId = interaction.values[0];

        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { canalDiretoria: canalId },
            create: { 
                guildId: interaction.guildId, 
                canalDiretoria: canalId,
                nomeFac: interaction.guild.name // <-- SOLUÇÃO AQUI
            }
        });

        return interaction.reply({
            content: `✅ Padrão! Canal da Diretoria setado para <#${canalId}>.`,
            flags: 64
        });
    }
};