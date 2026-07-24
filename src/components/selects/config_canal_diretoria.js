const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_canal_diretoria',
    async execute(interaction) {
        const canalId = interaction.values[0];

        // Atualiza no banco
        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: { canalDiretoria: canalId }
        });

        // Repinta o Hub Central na tela na mesma hora
        const hub = require('../buttons/painel_rh_recrutamento');
        await hub.execute(interaction);
    }
}