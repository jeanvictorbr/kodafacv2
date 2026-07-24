const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const prisma = require('../../database/prisma'); // Conexão com o seu banco de dados

module.exports = {
    // Esse ID tem que ser EXATAMENTE igual ao que abriu o formulário
    customId: 'modal_recrutamento', 
    
    async execute(interaction) {
        // 1. Avisa pro Discord que estamos processando (pra não dar aquele erro "Interação Falhou")
        await interaction.deferReply({ ephemeral: true });

        // 2. Captura o que o cara digitou nos campos do Modal
        const nomeRp = interaction.fields.getTextInputValue('nome_rp');
        const passaporte = interaction.fields.getTextInputValue('passaporte');
        const motivo = interaction.fields.getTextInputValue('motivo');

        // 3. Salva a Ficha no Banco de Dados (Prisma V7)
        const recrutamento = await prisma.recrutamento.create({
            data: {
                userId: interaction.user.id,
                nomeRp: nomeRp,
                passaporte: passaporte,
            }
        });

        // 4. Dá o feedback pro cara que preencheu (visível só pra ele)
        await interaction.editReply({ 
            content: '✅ **Ficha enviada com sucesso!** Nossa diretoria já está com seus dados. Aguarde na sala de espera.' 
        });

        // ==========================================
        // 🏢 A MESA DA DIRETORIA (SALA DA STAFF)
        // ==========================================
        
        // Puxa o ID do canal da diretoria do seu .env
        const canalStaffId = process.env.CANAL_DIRETORIA; 
        const canalStaff = interaction.guild.channels.cache.get(canalStaffId);

        // Se o dono da facção esqueceu de por o ID no .env, a gente avisa no log
        if (!canalStaff) {
            return console.log('[ERRO] CANAL_DIRETORIA não configurado no .env! A ficha foi pro banco, mas não foi enviada no chat.');
        }

        // 5. O Design Clean: Texto formatado no padrão Markdown (Nada de embed poluído!)
        const mensagemStaff = `
🟢 **NOVA APLICAÇÃO DE RECRUTAMENTO** 🟢

**Discord:** <@${interaction.user.id}>
**Nome RP:** \`${nomeRp}\`
**Passaporte:** \`${passaporte}\`

💬 **Motivação do Morador:**
> ${motivo}
`;

        // 6. O Menu interativo para o Recrutador (Select Menu)
        const menuRecrutador = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                // A gente injeta o ID do banco no customId pra saber qual ficha estamos avaliando
                .setCustomId(`staff_action_${recrutamento.id}`) 
                .setPlaceholder('⚙️ Gerenciar Ficha do Candidato')
                .addOptions([
                    { label: 'Assumir Recrutamento', description: 'Você chamará o candidato para a call.', value: 'assumir', emoji: '🤝' },
                    { label: 'Aprovar', description: 'Aprova o membro e entrega as tags.', value: 'aprovar', emoji: '✅' },
                    { label: 'Reprovar', description: 'Reprova e arquiva a ficha.', value: 'reprovar', emoji: '❌' },
                ])
        );

        // 7. Envia o card na sala privada da Staff!
        await canalStaff.send({
            content: mensagemStaff,
            components: [menuRecrutador]
        });
    }
};