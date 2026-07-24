const prisma = require('../../database/prisma');

module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        // Puxando configs da facção no banco
        let faccao = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        // Se a facção não existir no banco, cria o registro inicial
        if (!faccao) {
            faccao = await prisma.faccao.create({
                data: { 
                    guildId: interaction.guildId,
                    nomeFac: interaction.guild.name
                }
            });
        }

        // --- VARIÁVEIS ESTRUTURAIS ---
        const canalDiretoria = faccao.canalDiretoria ? `<#${faccao.canalDiretoria}>` : '\`Não configurado\`';
        const cargoMembro = faccao.cargoMembro ? `<@&${faccao.cargoMembro}>` : '\`Não configurado\`';
        const isSetupCompleto = faccao.canalDiretoria && faccao.cargoMembro;

        // --- VARIÁVEIS VISUAIS (Com fallbacks nativos/free) ---
        const vTitulo = faccao.vitrineTitulo || '🪖 Recrutamento Aberto';
        const vDesc = faccao.vitrineDesc || 'Junte-se à nossa facção. Preencha o formulário e aguarde a avaliação da diretoria.';
        const vBanner = faccao.vitrineBanner || '\`Padrão do Sistema\`';
        const vRodape = faccao.vitrineRodape || 'Sistema de Recrutamento';

        // Montando o payload JSON raiz no estilo App
        const payload = {
            flags: 32768 | 64, // Ephemeral + IsComponentsV2
            components: [
                {
                    type: 17, // Container
                    accent_color: 0x1F8B4C, // Verde Tropa (Gestão)
                    components: [
                        { 
                            type: 10, // Texto Cabeçalho
                            content: "# 🪖 Recrutamento | Hub Central\nVisão, chefe! Aqui você gerencia a estrutura e a aparência da sua vitrine de recrutamento." 
                        },
                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        
                        // ----------------------------------------------------
                        // SEÇÃO 1: ESTRUTURA INTERNA
                        // ----------------------------------------------------
                        { 
                            type: 10, 
                            content: `**1️⃣ Estrutura Interna**\nDefina onde as fichas vão cair e qual cargo o aprovado recebe.\n\n🏛️ **Sala da Diretoria:** ${canalDiretoria}\n🎖️ **Cargo de Membro:** ${cargoMembro}` 
                        },
                        {
                            type: 1, // Action Row
                            components: [
                                {
                                    type: 6, // Channel Select Menu (TIPO 6 = CANAL)
                                    custom_id: "config_canal_diretoria",
                                    placeholder: "Selecionar Sala da Diretoria",
                                    channel_types: [0] // 0 = GUILD_TEXT
                                }
                            ]
                        },
                        {
                            type: 1, // Action Row
                            components: [
                                {
                                    type: 8, // Role Select Menu (TIPO 8 = CARGO)
                                    custom_id: "config_cargo_membro",
                                    placeholder: "Selecionar Cargo de Membro"
                                }
                            ]
                        },
                        
                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        
                        // ----------------------------------------------------
                        // SEÇÃO 2: VISUAL DA VITRINE
                        // ----------------------------------------------------
                        { 
                            type: 10, 
                            content: `**2️⃣ Visual da Vitrine Pública**\nPersonalize o que os moradores vão ver no canal público.\n\n**Título:** ${vTitulo}\n**Descrição:** ${vDesc}\n**Banner URL:** ${vBanner}\n**Rodapé:** ${vRodape}` 
                        },
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2, // Botão
                                    style: 2, // Secondary (Cinza)
                                    label: "Personalizar Vitrine",
                                    custom_id: "btn_config_vitrine",
                                    emoji: { name: "🎨" }
                                }
                            ]
                        },

                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        
                        // ----------------------------------------------------
                        // SEÇÃO 3: AÇÕES FINAIS
                        // ----------------------------------------------------
                        {
                            type: 1, 
                            components: [
                                { 
                                    type: 2, 
                                    style: 3, // Success (Verde)
                                    label: "Spawnar Vitrine", 
                                    custom_id: "select_canal_recrutamento", // Abre menu pra escolher onde spawnar
                                    emoji: { name: "📢" }, 
                                    disabled: !isSetupCompleto // Trava se não tiver configurado a sala e o cargo
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

        // Injeta o payload bruto e liso
        await interaction.update(payload);
    }
}