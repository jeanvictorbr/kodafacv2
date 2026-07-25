module.exports = {
    async execute(interaction) {
        // Interface V2 de Atualização para a tela de RH
        const payload = {
            content: "",
            flags: 32832,
            components: [
                {
                    type: 17, // Container
                    components: [
                        {
                            type: 9, // Section
                            components: [
                                { type: 10, content: "### 📋 GESTÃO DE RH" },
                                { type: 14 },
                                { type: 10, content: "Gerencie o recrutamento e o fluxo de membros da sua facção." },
                                { type: 10, content: "Configure os canais e cargos primeiro para liberar a vitrine pública." }
                            ]
                        }
                    ]
                },
                {
                    type: 1, // ActionRow (Select Menu para configuração)
                    components: [
                        {
                            type: 8, // Role Select Menu
                            custom_id: "config_cargo_membro",
                            placeholder: "1️⃣ Selecione o cargo de Membro Base"
                        }
                    ]
                },
                {
                    type: 1, // ActionRow (Botões de Ação)
                    components: [
                        {
                            type: 2,
                            style: 1,
                            custom_id: "modal_vitrine",
                            label: "📝 Editar Vitrine"
                        },
                        {
                            type: 2,
                            style: 3,
                            custom_id: "spawn_vitrine",
                            label: "🚀 Lançar Recrutamento"
                        },
                        {
                            type: 2,
                            style: 4, // Danger (Vermelho)
                            custom_id: "painel_voltar",
                            label: "Voltar ao QG"
                        }
                    ]
                }
            ]
        };

        // Usa update() para não criar uma nova mensagem, apenas trocar a interface atual
        await interaction.update(payload);
    }
};