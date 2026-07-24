const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão usando a nova tecnologia V2 Components.'),

    async execute(interaction) {
        // Flag 32768 (IS_COMPONENTS_V2) + 64 (Ephemeral)
        const v2Flags = 32768 | 64;

        // Pegando a data atual formatada pro rodapé
        const dataAtual = new Date().toLocaleDateString('pt-BR');

        const rawPayload = {
            flags: v2Flags,
            components: [
                {
                    type: 17, // Container Component
                    accent_color: 0xFF0000, 
                    components: [
                        {
                            type: 12, // Media Gallery (Banner)
                            items: [
                                { media: { url: "https://i.imgur.com/Mq0POnA.gif" } }
                            ]
                        },
                        {
                            type: 10, // Text Display (Título)
                            content: "# 💼 QG DO PATRÃO | Central de Gestão\nVisão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo."
                        },
                        {
                            type: 14, // Separator
                            divider: true,
                            spacing: 1
                        },
                        {
                            type: 10, // Status atual sozinho em cima
                            content: "**Status atual:** `Plano Cria (Grátis)`"
                        },
                        
                        // --- INÍCIO DOS MÓDULOS ALINHADOS (SECTION) ---
                        {
                            type: 9, // Section Component (Texto na esquerda, Botão na direita)
                            components: [
                                {
                                    type: 10,
                                    content: "**📋 Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH."
                                }
                            ],
                            accessory: { 
                                type: 2, style: 2, label: "Gerenciar", custom_id: "painel_rh" 
                            }
                        },
                        {
                            type: 9, // Section 2
                            components: [
                                {
                                    type: 10,
                                    content: "**🔫 Arsenal & Baú** 💎\n`[REQUER VIP]` Auditoria de estoque e caixa 2."
                                }
                            ],
                            accessory: { 
                                type: 2, style: 2, label: "Acessar (VIP)", custom_id: "painel_arsenal" 
                            }
                        },
                        {
                            type: 9, // Section 3
                            components: [
                                {
                                    type: 10,
                                    content: "**⚖️ Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP."
                                }
                            ],
                            accessory: { 
                                type: 2, style: 2, label: "Abrir", custom_id: "painel_tribunal" 
                            }
                        },
                        // --- FIM DOS MÓDULOS ---

                        {
                            type: 14, // Separator antes do rodapé
                            divider: true,
                            spacing: 1
                        },
                        {
                            type: 1, // Action Row (Isolado no fundo só pro botão VIP)
                            components: [
                                { type: 2, style: 3, label: "Resgatar Chave VIP", custom_id: "painel_ativar_key", emoji: { name: "🔑" } }
                            ]
                        },
                        {
                            type: 10, // Text Display (Rodapé Clean usando subtexto)
                            content: `-# KODA STUDIOS | #Tropa • ${dataAtual}`
                        }
                    ]
                }
            ]
        };

        try {
            await interaction.client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                {
                    body: {
                        type: 4, 
                        data: rawPayload
                    }
                }
            );
        } catch (error) {
            console.error('[ERRO V2 COMPONENTS]:', error);
        }
    },
};