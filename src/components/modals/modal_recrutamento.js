const { ActionRowBuilder, StringSelectMenuBuilder, MessageFlags } = require('discord.js');
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'modal_recrutamento',
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const nomeRp = interaction.fields.getTextInputValue('nome_rp');
        const passaporte = interaction.fields.getTextInputValue('passaporte');
        const motivo = interaction.fields.getTextInputValue('motivo');

        const faccao = await prisma.faccao.findUnique({ where: { guildId: interaction.guildId } });

        if (!faccao || !faccao.canalDiretoria) {
            return interaction.editReply({ content: '❌ O canal da Diretoria ainda não foi configurado pelo painel da facção.' });
        }

        const recrutamento = await prisma.recrutamento.create({
            data: {
                guildId: interaction.guildId,
                userId: interaction.user.id,
                nomeRp: nomeRp,
                passaporte: passaporte,
            }
        });

        await interaction.editReply({ content: '✅ Sua ficha foi enviada para a diretoria. Aguarde!' });

        const canalStaff = interaction.guild.channels.cache.get(faccao.canalDiretoria);
        if (!canalStaff) return;

        const conteudoStaff = `
🟢 **NOVA APLICAÇÃO DE RECRUTAMENTO** 🟢

**Discord:** <@${interaction.user.id}>
**Nome RP:** \`${nomeRp}\`
**Passaporte:** \`${passaporte}\`

💬 **Motivação:**
> ${motivo}
`;

        const menuRecrutador = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(`staff_action_${recrutamento.id}`)
                .setPlaceholder('⚙️ Gerenciar Ficha')
                .addOptions([
                    { label: 'Assumir Recrutamento', description: 'Responsável pelo teste.', value: 'assumir', emoji: '🤝' },
                    { label: 'Aprovar', description: 'Aprova o candidato.', value: 'aprovar', emoji: '✅' },
                    { label: 'Reprovar', description: 'Rejeita a ficha.', value: 'reprovar', emoji: '❌' },
                ])
        );

        await canalStaff.send({
            flags: MessageFlags.IsComponentsV2,
            components: [
                {
                    type: 10,
                    content: conteudoStaff
                },
                menuRecrutador
            ]
        });
    }
};