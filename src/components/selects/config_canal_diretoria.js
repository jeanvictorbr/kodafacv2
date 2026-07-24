const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_canal_diretoria',
    async execute(interaction) {
        await interaction.deferUpdate();
        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: { canalDiretoria: interaction.values[0] }
        });
        const hub = require('../buttons/painel_rh_recrutamento');
        await hub.execute(interaction);
    }
}