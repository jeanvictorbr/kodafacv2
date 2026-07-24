const { ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder } = require('discord.js');
// Supondo que você tenha um gerador de canvas como no seu bot antigo (kibov1)
// const canvasBuilder = require('../../utils/canvasBuilder'); 

module.exports = {
    customId: 'select_canal_recrutamento',
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const canalAlvoId = interaction.values[0];
        const canalAlvo = interaction.guild.channels.cache.get(canalAlvoId);

        if (!canalAlvo) return interaction.editReply('❌ Canal não encontrado.');

        // O Botão clean
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('btn_aplicar_fac')
                .setLabel('ENVIAR FICHA')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji('📋')
        );

        // Aqui entraria a sua imagem gerada por Canvas (Vitrine Clean)
        // const buffer = await canvasBuilder.gerarVitrineRecrutamento();
        // const attachment = new AttachmentBuilder(buffer, { name: 'recrutamento.png' });

        await canalAlvo.send({
            content: '## 🔫 RECRUTAMENTO ABERTO\nAcha que tem disposição pra somar na nossa facção?\nClica no botão abaixo, preenche tuas informações e aguarda a chamada da diretoria.',
            // files: [attachment], // Quando o canvas estiver pronto, descomenta aqui
            components: [row]
        });

        await interaction.editReply(`✅ Vitrine de recrutamento instalada com sucesso no canal <#${canalAlvoId}>!`);
    }
};