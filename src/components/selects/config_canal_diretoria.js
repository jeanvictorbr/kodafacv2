const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_canal_diretoria',
    async execute(interaction) {
        // Segura a API do Discord pra não dar "Não respondeu a tempo"
        await interaction.deferUpdate();

        const canalId = interaction.values[0];

        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: { canalDiretoria: canalId }
        });

        // Atualiza a tela em tempo real chamando o Hub de volta
        const hubRecrutamento = require('../buttons/painel_rh_recrutamento');
        await hubRecrutamento.execute(interaction);
    }
}