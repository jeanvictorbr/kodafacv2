const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'modal_recrutamento',
    
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const nomeRp = interaction.fields.getTextInputValue('nome_rp');
        const passaporte = interaction.fields.getTextInputValue('passaporte');
        const motivo = interaction.fields.getTextInputValue('motivo');

        // 1. Busca a configuração da Facção no banco para achar o canal da Diretoria
        const faccaoConfig = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        // Se o Dono não configurou o canal no /painel ainda...
        if (!faccaoConfig || !faccaoConfig.canalRecrutamento) {
            return interaction.editReply('❌ O canal da Diretoria ainda não foi configurado pelo dono da Facção no `/painel`!');
        }

        // 2. Salva a ficha associando ao Servidor (guildId)
        const recrutamento = await prisma.recrutamento.create({
            data: {
                guildId: interaction.guildId,
                userId: interaction.user.id,
                nomeRp: nomeRp,
                passaporte: passaporte,
            }
        });

        await interaction.editReply({ 
            content: '✅ **Ficha enviada com sucesso!** A diretoria já está com seus dados. Aguarde contato.' 
        });

        // 3. Puxa o canal que está salvo no banco
        const canalStaff = interaction.guild.channels.cache.get(faccaoConfig.canalRecrutamento);
        if (!canalStaff) return; // Canal pode ter sido deletado

        // 4. Formatação Clean em Texto (Sem Embeds!)
        const mensagemStaff = `
🟢 **NOVA APLICAÇÃO DE RECRUTAMENTO** 🟢

**Discord:** <@${interaction.user.id}>
**Nome RP:** \`${nomeRp}\`
**Passaporte:** \`${passaporte}\`

💬 **Motivação do Morador:**
> ${motivo}
`;

        // 5. O Menu Select da Diretoria
        const menuRecrutador = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(`staff_action_${recrutamento.id}`) 
                .setPlaceholder('⚙️ Gerenciar Ficha do Candidato')
                .addOptions([
                    { label: 'Assumir Recrutamento', description: 'Você chamará o candidato para a call.', value: 'assumir', emoji: '🤝' },
                    { label: 'Aprovar', description: 'Aprova o membro e entrega as tags.', value: 'aprovar', emoji: '✅' },
                    { label: 'Reprovar', description: 'Reprova e arquiva a ficha.', value: 'reprovar', emoji: '❌' },
                ])
        );

        // Envia pra mesa da diretoria!
        await canalStaff.send({
            content: mensagemStaff,
            components: [menuRecrutador]
        });
    }
};