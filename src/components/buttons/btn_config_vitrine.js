const prisma = require('../../database/prisma');

module.exports = {
    customId: 'btn_config_vitrine',
    async execute(interaction) {
        // Puxa do banco para vir com as infos já preenchidas no Modal
        const faccao = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        // Monta o Modal em JSON bruto
        const modalPayload = {
            title: "🎨 Personalizar Vitrine",
            custom_id: "modal_config_vitrine", // Esse ID será o handler que vai salvar as infos
            components: [
                {
                    type: 1,
                    components: [{
                        type: 4, // Text Input
                        custom_id: "input_titulo",
                        label: "Título da Vitrine",
                        style: 1, // Curto
                        value: faccao?.vitrineTitulo || '🪖 Recrutamento Aberto',
                        required: true,
                        max_length: 100
                    }]
                },
                {
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: "input_desc",
                        label: "Descrição / Texto Principal",
                        style: 2, // Parágrafo (Longo)
                        value: faccao?.vitrineDesc || 'Junte-se à nossa facção. Preencha o formulário e aguarde a avaliação da diretoria.',
                        required: true,
                        max_length: 1000
                    }]
                },
                {
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: "input_banner",
                        label: "Link do Banner (URL de Imagem PNG/GIF)",
                        style: 1,
                        value: faccao?.vitrineBanner || '',
                        required: false,
                        placeholder: "https://i.imgur.com/suaimagem.gif"
                    }]
                },
                {
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: "input_rodape",
                        label: "Rodapé",
                        style: 1,
                        value: faccao?.vitrineRodape || 'Sistema de Recrutamento',
                        required: true,
                        max_length: 100
                    }]
                }
            ]
        };

        // Dispara o Modal na tela
        await interaction.showModal(modalPayload);
    }
}