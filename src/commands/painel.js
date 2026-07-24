const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão usando a nova tecnologia V2 Components.'),

    async execute(interaction) {
        // 1. A MÁGICA DA V2: A flag 32768 é o IS_COMPONENTS_V2 (1 << 15)
        // Somamos com 64 (Ephemeral) para a mensagem ser apenas para o Patrão.
        const v2Flags = 32768 | 64;

        // 2. CONSTRUINDO O JSON DA VITRINE NATIVA
        const rawPayload = {
            flags: v2Flags,
            // Na V2 não existe mais "embeds" ou "content", tudo é Componente
            components: [
                {
                    type: 17, // Container Component
                    accent_color: 0xFF0000, // A linha lateral Vermelha (KodaFac)
                    components: [
                        {
                            type: 12, // Media Gallery para o Banner no topo
                            items: [
                                { media: { url: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2ce2433db9b897858bf4.gif" } }
                            ]
                        },
                        {
                            type: 10, // Text Display (Onde vai o texto)
                            content: "# 💼 QG DO PATRÃO | Central de Gestão\nVisão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo."
                        },
                        {
                            type: 14, // Separator (Cria a divisão suave nativa do Discord)
                            divider: true,
                            spacing: 1
                        },
                        {
                            type: 10, // Outro Text Display para os módulos
                            content: "**Status atual:** `Plano Cria (Grátis)`\n\n📋 **Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH.\n\n🔫 **Arsenal & Baú** 💎\n`[REQUER VIP]` Auditoria de estoque e caixa 2.\n\n⚖️ **Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP."
                        },
                        {
                            type: 1, // Action Row DENTRO do Container
                            components: [
                                { type: 2, style: 2, label: "Gestão e RH", custom_id: "painel_rh", emoji: { name: "📋" } },
                                { type: 2, style: 2, label: "Arsenal (VIP)", custom_id: "painel_arsenal", emoji: { name: "🔫" } },
                                { type: 2, style: 2, label: "Tribunal", custom_id: "painel_tribunal", emoji: { name: "⚖️" } }
                            ]
                        },
                        {
                            type: 1, // Segunda Action Row com o botão VIP
                            components: [
                                { type: 2, style: 3, label: "Resgatar Chave VIP", custom_id: "painel_ativar_key", emoji: { name: "🔑" } }
                            ]
                        }
                    ]
                }
            ]
        };

        // 3. ENVIANDO DIRETO PARA A API REST DO DISCORD
        // Usamos o rest.post para evitar que o validador do discord.js bloqueie os tipos novos (17, 10, 14, etc).
        try {
            await interaction.client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                {
                    body: {
                        type: 4, // 4 significa: Responder à interação imediatamente
                        data: rawPayload
                    }
                }
            );
        } catch (error) {
            console.error('[ERRO V2 COMPONENTS]:', error);
        }
    },
};