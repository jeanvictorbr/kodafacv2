// src/components/menu_rh.js

module.exports = {
    async execute(interaction, client) {
        
        // Desenhando o Dashboard de RH usando Components V2
        // A Flag 32832 garante que continua usando a V2 e Ephemeral
        const rhDashboardPayload = {
            flags: 32832,
            components: [
                {
                    type: 17, // Container
                    accent_color: 0x2b2d31,
                    components: [
                        {
                            type: 10, // Text Display
                            content: `# 📁 DEPARTAMENTO DE RECURSOS HUMANOS\nGerencie o recrutamento da facção, configure os cargos e personalize a vitrine de entrada.\n\n**O que você deseja fazer?**`
                        },
                        {
                            type: 14, // Separador pra ficar elegante
                            divider: true,
                            spacing: 2
                        },
                        {
                            type: 1, // Action Row 1 (Botões de Configuração)
                            components: [
                                {
                                    type: 2, // Button
                                    style: 1, // Primary (Azul)
                                    label: "Canais e Cargos",
                                    emoji: { name: "⚙️" },
                                    custom_id: "modal_rh_sys" // Vai abrir o modal pra setar IDs
                                },
                                {
                                    type: 2,
                                    style: 2, // Secondary (Cinza)
                                    label: "Design da Vitrine",
                                    emoji: { name: "🎨" },
                                    custom_id: "modal_rh_design" // Vai abrir o modal de textos/banner
                                }
                            ]
                        },
                        {
                            type: 1, // Action Row 2 (Operacional)
                            components: [
                                {
                                    type: 2,
                                    style: 3, // Success (Verde)
                                    label: "Lançar Vitrine",
                                    emoji: { name: "🚀" },
                                    custom_id: "menu_rh_lancar" // Escolher onde postar
                                },
                                {
                                    type: 2,
                                    style: 2,
                                    label: "Ranking de Recrutadores",
                                    emoji: { name: "🏆" },
                                    custom_id: "menu_rh_ranking" // Mostra quem mais aprovou
                                },
                                {
                                    type: 2,
                                    style: 4, // Danger (Vermelho)
                                    label: "Voltar",
                                    emoji: { name: "⬅️" },
                                    custom_id: "painel" // Recarrega o menu principal
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        try {
            // Injeção na API: Type 7 = UPDATE_MESSAGE
            // Isso edita a mensagem atual de forma imperceptível, mudando a tela pro usuário!
            await client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                {
                    body: {
                        type: 7, 
                        data: rhDashboardPayload
                    }
                }
            );
        } catch (error) {
            console.error('[ERRO] Falha ao renderizar Dashboard de RH:', error);
        }
    }
};