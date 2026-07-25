const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const prisma = require('../database/prisma');

module.exports = {
    // Restringimos o comando apenas para Administradores da guilda
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão (Central de Gestão da Facção)')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        // 1. Puxa os dados da facção ou cria se não existir (Upsert)
        const guildId = interaction.guild.id;
        
        const faccao = await prisma.faccao.upsert({
            where: { guildId: guildId },
            update: {}, // Não atualiza nada na busca
            create: {
                guildId: guildId,
                nomeFac: interaction.guild.name
            }
        });

        // 2. Define a tag visual do status da assinatura
        const statusVip = faccao.isPremium ? "🟢 VIP ATIVO" : "🔴 PLANO GRATUITO";

        // 3. Monta a Interface V2 Nativa (Zero Embeds)
        // flags: 32832 = 32768 (IsComponentsV2) + 64 (Ephemeral - só quem chamou vê)
        const payload = {
            content: "",
            flags: 32832, 
            components: [
                {
                    type: 17, // Container Master
                    components: [
                        {
                            type: 9, // Section
                            components: [
                                { type: 10, content: "## 👑 QG DO PATRÃO" },
                                { type: 14 }, // Divider (Linha horizontal)
                                { type: 10, content: `**Facção:** ${interaction.guild.name}` },
                                { type: 10, content: `**Status do Sistema:** ${statusVip}` },
                                { type: 14 },
                                { type: 10, content: "Bem-vindo à mesa da diretoria. Use o menu abaixo para gerenciar a organização." }
                            ]
                        }
                    ]
                },
                {
                    type: 1, // ActionRow (Onde ficam os botões)
                    components: [
                        { 
                            type: 2, // Botão
                            style: 1, // Primary (Azul)
                            custom_id: "painel_rh", 
                            label: "📋 Gestão de RH" 
                        },
                        { 
                            type: 2, 
                            style: 2, // Secondary (Cinza)
                            custom_id: "painel_config", 
                            label: "⚙️ Configurações" 
                        },
                        {
                            type: 2,
                            style: 3, // Success (Verde)
                            custom_id: "painel_vip",
                            label: "💎 Ativar VIP"
                        }
                    ]
                }
            ]
        };

        // 4. Envia o payload cru. O djs repassa para a API do Discord.
        await interaction.reply(payload);
    }
};