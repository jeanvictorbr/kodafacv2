// src/components/modal_rh_config.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // Esse arquivo roda quando o formulário "modal_rh_config" é enviado
    async execute(interaction, client) {
        
        // 1. Coletando os dados que o líder digitou
        // Como estamos usando a nova API (Type 18 Label), extraímos direto do raw data da interação
        const rawComponents = interaction.components;
        
        let channelId = '';
        let roleId = '';

        // Varremos o array que o Discord mandou de volta pra pescar os valores
        for (const row of rawComponents) {
            // No V2 com Label, a estrutura vem dentro de um componente filho
            const child = row.components[0];
            if (child.customId === 'input_rh_channel') channelId = child.value;
            if (child.customId === 'input_rh_role') roleId = child.value;
        }

        // Retira qualquer espaço em branco que o cara pode ter copiado sem querer
        channelId = channelId.trim();
        roleId = roleId.trim();

        try {
            // 2. Gravando no Banco de Dados (PostgreSQL via Prisma)
            // Usamos o "upsert": Se a facção já existe, ele só atualiza (update). Se não, ele cria (create).
            await prisma.faction.upsert({
                where: { guildId: interaction.guild.id },
                update: {
                    rhChannelId: channelId,
                    rhRoleId: roleId
                },
                create: {
                    guildId: interaction.guild.id,
                    name: interaction.guild.name,
                    rhChannelId: channelId,
                    rhRoleId: roleId
                }
            });

            // 3. Montando a Vitrine Pública de Recrutamento (Zero Embed, só Components V2)
            const vitrinePayload = {
                flags: 32768, // Aqui usamos 32768 porque é pra TODOS verem no canal público (Sem o ephemeral 64)
                components: [
                    {
                        type: 17, // Container
                        accent_color: 0x8b0000, // Vermelho escuro (Estilo RP)
                        components: [
                            {
                                type: 10, // Text Display
                                content: `# 📋 RECRUTAMENTO ABERTO\n\nA facção está contratando! Clique no botão abaixo para preencher sua ficha.\n\n**Requisitos:**\n- Ter lido as regras da cidade.\n- Comprometimento com o RP.\n\n*A sua ficha será enviada diretamente para a nossa diretoria.*`
                            },
                            {
                                type: 1, // Action Row
                                components: [
                                    {
                                        type: 2, // Button
                                        style: 3, // Success (Verde)
                                        label: "Enviar Ficha (Passaporte)",
                                        emoji: { name: "📝" },
                                        custom_id: "btn_fazer_ficha" // O próximo roteamento cego do morador!
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            // 4. Enviando a Vitrine para o canal que o líder configurou via API REST
            await client.rest.post(
                `/channels/${channelId}/messages`,
                {
                    body: vitrinePayload
                }
            );

            // 5. Respondendo pro líder (Ephemeral) pra confirmar o sucesso
            await interaction.reply({
                content: `✅ **Sucesso, Patrão!** \nO RH foi configurado. Canal setado para <#${channelId}> e Cargo para <@&${roleId}>.\nA vitrine já foi enviada lá no canal!`,
                flags: 64 // Só o dono vê
            });

        } catch (error) {
            console.error('[ERRO] Falha ao configurar RH ou enviar vitrine:', error);
            
            // Tratamento caso o líder tenha colocado um ID de canal inválido
            if (error.status === 404 || error.code === 50035) {
                return interaction.reply({
                    content: '❌ **Erro:** O ID do canal ou cargo não foi encontrado. Confere se você copiou o ID certinho e tenta de novo.',
                    flags: 64
                });
            }

            await interaction.reply({
                content: '❌ **Erro no Sistema.** Algo deu errado na hora de salvar no banco de dados.',
                flags: 64
            });
        }
    }
};