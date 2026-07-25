// src/commands/painel.js
const { SlashCommandBuilder } = require('discord.js');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG administrativo da sua Facção (Apenas Líderes)'),

    async execute(interaction, client) {
        
        // 1. Verificação de Segurança
        const isGuildOwner = interaction.user.id === interaction.guild.ownerId;
        const isBotDev = interaction.user.id === process.env.DEV_ID;

        if (!isGuildOwner && !isBotDev) {
            return interaction.reply({
                content: '🚫 **Acesso Negado.** Só o patrão tem a chave desse QG.',
                flags: 64
            });
        }

        // 2. Busca o plano da facção no banco pra mostrar dinamicamente
        const faction = await prisma.faction.findUnique({
            where: { guildId: interaction.guild.id }
        });
        const isVip = faction?.isVip || false;
        const planoTexto = isVip ? '`👑 Plano Patrão (VIP)`' : '`Plano Cria (Grátis)`';

        // 3. Montando a Interface V2 com Sections (O Segredo do Layout Modular)
        const rawPayload = {
            flags: 32832, // 32768 (V2) + 64 (Ephemeral)
            components: [
                {
                    type: 17, // Container que abraça tudo
                    accent_color: 0xED4245, // Vermelho escuro/Carmesim (A barrinha lateral)
                    components: [
                        // --- CABEÇALHO E BANNER ---
                        {
                            type: 10, 
                            // Usamos markdown pra puxar o banner, título e descrição. 
                            // (Troque o link do imgur pelo banner padrão que você quiser)
                            content: `![Banner](https://i.imgur.com/kK35Qx8.jpeg)\n# 💼 QG DO PATRÃO | Central de Gestão\nVisão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo.\n\n**Status atual:** ${planoTexto}`
                        },
                        
                        // --- MÓDULO 1: RH ---
                        {
                            type: 9, // SECTION: Texto na esquerda, Botão na direita
                            components: [
                                {
                                    type: 10,
                                    content: "**📋 Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH."
                                }
                            ],
                            accessory: {
                                type: 2, // Botão
                                style: 2, // Secondary (Cinza)
                                label: "Explorar",
                                custom_id: "menu_rh"
                            }
                        },

                        // --- MÓDULO 2: ARSENAL E BAÚ ---
                        {
                            type: 9, 
                            components: [
                                {
                                    type: 10,
                                    content: "**🔫 Arsenal & Baú** 💎\n`[REQUER VIP]` Auditoria de estoque e caixa 2."
                                }
                            ],
                            accessory: {
                                type: 2,
                                style: 2,
                                label: "Explorar",
                                custom_id: "menu_arsenal"
                            }
                        },

                        // --- MÓDULO 3: TRIBUNAL DO CRIME ---
                        {
                            type: 9, 
                            components: [
                                {
                                    type: 10,
                                    content: "**⚖️ Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP."
                                }
                            ],
                            accessory: {
                                type: 2,
                                style: 2,
                                label: "Explorar",
                                custom_id: "menu_tribunal"
                            }
                        },

                        // --- PAGINAÇÃO (Action Row com botões de passar página) ---
                        {
                            type: 1, 
                            components: [
                                {
                                    type: 2,
                                    style: 2,
                                    emoji: { name: "⬅️" },
                                    custom_id: "page_back",
                                    disabled: true // Desativado porque tá na página 1
                                },
                                {
                                    type: 2,
                                    style: 2,
                                    label: "Página 1/2",
                                    custom_id: "page_indicator",
                                    disabled: true // Apenas visual
                                },
                                {
                                    type: 2,
                                    style: 2,
                                    emoji: { name: "➡️" },
                                    custom_id: "page_next"
                                }
                            ]
                        },

                        // --- BOTÃO DE VIP ---
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2,
                                    style: 3, // Success (Verde)
                                    label: "Resgatar Chave VIP",
                                    emoji: { name: "🔑" },
                                    custom_id: "menu_vip"
                                }
                            ]
                        },

                        // --- RODAPÉ (Pequeno formato de footer usando -#) ---
                        {
                            type: 10,
                            content: `-# KODA STUDIOS | #${interaction.guild.name} • Sistema Integrado`
                        }
                    ]
                }
            ]
        };

        try {
            // 4. Injetando direto na veia da API
            await client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                {
                    body: {
                        type: 4, 
                        data: rawPayload
                    }
                }
            );
        } catch (error) {
            console.error('[ERRO] Falha ao renderizar a interface V2 do painel:', error);
        }
    }
};