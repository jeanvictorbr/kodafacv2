const prisma = require('../../database/prisma');

module.exports = {
    customId: 'modal_config_vitrine',
    async execute(interaction) {
        // Puxa os dados que o líder digitou no formulário
        const titulo = interaction.fields.getTextInputValue('input_titulo');
        const desc = interaction.fields.getTextInputValue('input_desc');
        const banner = interaction.fields.getTextInputValue('input_banner') || null;
        const rodape = interaction.fields.getTextInputValue('input_rodape');

        // Atualiza os detalhes da vitrine no banco de dados
        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: {
                vitrineTitulo: titulo,
                vitrineDesc: desc,
                vitrineBanner: banner,
                vitrineRodape: rodape
            }
        });

        // Dá o refresh mágico na tela para mostrar o visual novo
        const hubRecrutamento = require('../buttons/painel_rh_recrutamento');
        await hubRecrutamento.execute(interaction);
    }
}