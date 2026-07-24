const prisma = require('../../database/prisma');

module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        let faccao = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        if (!faccao) {
            faccao = await prisma.faccao.create({
                data: { 
                    guildId: interaction.guildId,
                    nomeFac: interaction.guild.name
                }
            });
        }

        const canalDiretoria = faccao.canalDiretoria ? `<#${faccao.canalDiretoria}>` : '\`Não configurado\`';
        const cargoMembro = faccao.cargoMembro ? `<@&${faccao.cargoMembro}>` : '\`Não configurado\`';
        const cargoRecrutador = faccao.cargoRecrutador ? `<@&${faccao.cargoRecrutador}>` : '\`Não configurado\`';
        
        const isSetupCompleto = faccao.canalDiretoria && faccao.cargoMembro && faccao.cargoRecrutador;

        const vTitulo = faccao.vitrineTitulo || '🪖 Recrutamento Aberto';
        const vDesc = faccao.vitrineDesc || 'Junte-se à nossa facção. Preencha o formulário e aguarde a avaliação.';
        const vBanner = faccao.vitrineBanner || '\`Padrão do Sistema\`';
        const vRodape = faccao.vitrineRodape || 'Sistema de Recrutamento';

        const payload = {
            flags: 32768 | 64, // Ephemeral + IsComponentsV2
            components: [
                {
                    type: 17, // Container
                    accent_color: 0x1F8B4C,
                    components: [
                        { 
                            type: 10,
                            content: "# 🪖 Recrutamento | Hub Central\nVisão, chefe! Aqui você gerencia a estrutura e a aparência da sua vitrine." 
                        },
                        { type: 14, divider: true, spacing: 1 },
                        
                        // SEÇÃO 1: ESTRUTURA INTERNA
                        { 
                            type: 10, 
                            content: `**1️⃣ Estrutura Interna**\n🏛️ **Sala da Diretoria:** ${canalDiretoria}\n🎖️ **Cargo de Membro:** ${cargoMembro}\n🗣️ **Cargo Recrutador:** ${cargoRecrutador}` 
                        },
                        // SELECT DE CANAL (TYPE 6 no JSON V2 do Discord para canais)
                        {
                            type: 1,
                            components: [
                                {
                                    type: 6, 
                                    custom_id: "config_canal_diretoria",
                                    placeholder: "Selecionar Sala da Diretoria",
                                    channel_types: [0]
                                }
                            ]
                        },
                        // SELECT DE CARGO MEMBRO (TYPE 8 no JSON V2 para cargos)
                        {
                            type: 1,
                            components: [
                                {
                                    type: 8, 
                                    custom_id: "config_cargo_membro",
                                    placeholder: "Selecionar Cargo de Membro"
                                }
                            ]
                        },
                        // SELECT DE CARGO RECRUTADOR (TYPE 8 no JSON V2 para cargos)
                        {
                            type: 1,
                            components: [
                                {
                                    type: 8, 
                                    custom_id: "config_cargo_recrutador",
                                    placeholder: "Selecionar Cargo de Recrutador"
                                }
                            ]
                        },
                        
                        { type: 14, divider: true, spacing: 1 },
                        
                        // SEÇÃO 2: VISUAL DA VITRINE
                        { 
                            type: 10, 
                            content: `**2️⃣ Visual da Vitrine Pública**\n**Título:** ${vTitulo}\n**Descrição:** ${vDesc}\n**Banner URL:** ${vBanner}\n**Rodapé:** ${vRodape}` 
                        },
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2,
                                    style: 2,
                                    label: "Personalizar Vitrine",
                                    custom_id: "btn_config_vitrine",
                                    emoji: { name: "🎨" }
                                }
                            ]
                        },

                        { type: 14, divider: true, spacing: 1 },
                        
                        // SEÇÃO 3: AÇÕES
                        {
                            type: 1, 
                            components: [
                                { 
                                    type: 2, 
                                    style: 3,
                                    label: "Spawnar Vitrine", 
                                    custom_id: "select_canal_recrutamento", 
                                    emoji: { name: "📢" }, 
                                    disabled: !isSetupCompleto 
                                },
                                { 
                                    type: 2, 
                                    style: 4,
                                    label: "⬅️ Voltar", 
                                    custom_id: "painel_rh" 
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        await interaction.update(payload);
    }
}