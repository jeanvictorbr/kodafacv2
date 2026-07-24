module.exports = {
    customId: 'painel_rh',
    async execute(interaction) {
        // Montando o payload JSON bruto no padrão V2 Components
        const payload = {
            flags: 32768 | 64, // MessageFlags.IsComponentsV2 (32768) | Ephemeral (64)
            components: [
                {
                    type: 17, // Container
                    accent_color: 0x0055FF, // Cor do detalhe lateral (Azul Gestão)
                    components: [
                        { 
                            type: 10, // Text Display
                            content: "# 📋 Central de Gestão e RH\n*Controle quem entra, quem sai e quem trampa na facção.*" 
                        },
                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        
                        // Módulo 1: Recrutamento (Section)
                        {
                            type: 9, // Section Component
                            components: [{ type: 10, content: "**🪖 Recrutamento e Peneira**\nSetup de diretoria, formulários e aprovações." }],
                            accessory: { 
                                type: 2, // Button
                                style: 2, // Secondary
                                label: "Explorar", 
                                custom_id: "painel_rh_recrutamento" 
                            }
                        },
                        
                        // Módulo 2: Ponto (Section)
                        {
                            type: 9, // Section Component
                            components: [{ type: 10, content: "**⏳ Ponto & Farm**\n*(Em desenvolvimento)*" }],
                            accessory: { 
                                type: 2, // Button
                                style: 2, // Secondary
                                label: "Explorar", 
                                custom_id: "painel_rh_ponto",
                                disabled: true
                            }
                        },

                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        
                        // Botão Voltar
                        { 
                            type: 1, // Action Row
                            components: [
                                { 
                                    type: 2, // Button
                                    style: 4, // Danger (Vermelho)
                                    label: "⬅️ Voltar ao QG", 
                                    custom_id: "painel_page_1" 
                                }
                            ] 
                        }
                    ]
                }
            ]
        };

        // Injeta o payload brabíssimo na API do Discord
        await interaction.update(payload);
    }
}