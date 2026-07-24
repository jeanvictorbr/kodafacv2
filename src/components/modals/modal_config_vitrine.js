const prisma = require('../../database/prisma');

module.exports = {
    customId: 'modal_config_vitrine',
    async execute(interaction) {
        // Puxa o que foi digitado no formulário
        const titulo = interaction.fields.getTextInputValue('input_titulo');
        const desc = interaction.fields.getTextInputValue('input_desc');
        const banner = interaction.fields.getTextInputValue('input_banner') || null;
        const rodape = interaction.fields.getTextInputValue('input_rodape');

        // Salva no banco de dados
        await prisma.faccao.update({
            where: { guildId: interaction.guildId },
            data: {
                vitrineTitulo: titulo,
                vitrineDesc: desc,
                vitrineBanner: banner,
                vitrineRodape: rodape
            }
        });

        // Repinta o Hub Central pra mostrar o visual atualizado
        const hub = require('../buttons/painel_rh_recrutamento');
        await hub.execute(interaction);
    }
}