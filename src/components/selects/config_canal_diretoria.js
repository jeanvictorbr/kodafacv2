const { MessageFlags } = require('discord.js');
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'config_canal_diretoria',
    async execute(interaction) {
        await interaction.deferUpdate();

        const canalId = interaction.values[0];

        // Salva ou atualiza a facção no banco com o canal da diretoria daquela guilda
        await prisma.faccao.upsert({
            where: { guildId: interaction.guildId },
            update: { canalDiretoria: canalId },
            create: {
                guildId: interaction.guildId,
                nomeFac: interaction.guild.name,
                canalDiretoria: canalId
            }
        });

        // Recarrega o painel de recrutamento para refletir o status atualizado
        const painelRhRecrutamento = require('../buttons/painel_rh_recrutamento');
        return painelRhRecrutamento.execute(interaction);
    }
};