const prisma = require('../../database/prisma');

module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        // Puxando configs da facção no banco
        let faccao = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        if (!faccao) {
            faccao = await prisma.faccao.create({
                data: { guildId: interaction.guildId }
            });
        }

        const canalDiretoria = faccao.canalDiretoria ? `<#${faccao.canalDiretoria}>` : '`Não configurado`';
        const cargoMembro = faccao.cargoMembro ? `<@&${faccao.cargoMembro}>` : '`Não configurado`';
        const isSetupCompleto = faccao.canalDiretoria && faccao.cargoMembro;

        // Montando o payload JSON raiz no estilo App
        const payload = {
            flags: 32768 | 64, // Ephemeral + IsComponentsV2
            components: [
                {
                    type: 17, // Container
                    accent_color: 0x0055FF, // Cor do detalhe lateral (Azul RH)
                    components: [
                        { 
                            type: 10, // Texto
                            content: "# 🪖 Recrutamento | Setup\nVisão, chefe! Aqui você monta a estrutura pra recrutar os morador." 
                        },
                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        { 
                            type: 10, 
                            content: `**Status atual do Setup:**\n🏛️ **Sala da Diretoria:** ${canalDiretoria}\n🎖️ **Cargo de Membro:** ${cargoMembro}` 
                        },
                        { type: 14, divider: true, spacing: 1 },
                        
                        // Select Menu de Canal
                        {
                            type: 1, // Action Row
                            components: [
                                {
                                    type: 6, // Channel Select Menu
                                    custom_id: "config_canal_diretoria",
                                    placeholder: "Selecionar Sala da Diretoria",
                                    channel_types: [0] // 0 = GUILD_TEXT
                                }
                            ]
                        },
                        
                        // Select Menu de Cargo
                        {
                            type: 1,
                            components: [
                                {
                                    type: 8, // Role Select Menu
                                    custom_id: "config_cargo_membro",
                                    placeholder: "Selecionar Cargo de Membro"
                                }
                            ]
                        },
                        { type: 14, divider: true, spacing: 1 },
                        
                        // Botões de Ação
                        {
                            type: 1, 
                            components: [
                                { 
                                    type: 2, // Button
                                    style: 3, // Success (Verde)
                                    label: "Spawnar Vitrine", 
                                    custom_id: "select_canal_recrutamento", 
                                    emoji: { name: "📢" }, 
                                    disabled: !isSetupCompleto // Trava se não tiver configurado
                                },
                                { 
                                    type: 2, 
                                    style: 4, // Danger (Vermelho)
                                    label: "⬅️ Voltar", 
                                    custom_id: "painel_rh" 
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Injeta o payload brabíssimo
        await interaction.update(payload);
    }
}