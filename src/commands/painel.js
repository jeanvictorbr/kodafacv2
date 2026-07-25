// src/commands/painel.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    // Registra o comando de barra na API
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG administrativo da sua Facção (Apenas Líderes)'),

    async execute(interaction, client) {
        
        // 1. Verificação de Segurança (Lock na porta do QG)
        const isGuildOwner = interaction.user.id === interaction.guild.ownerId;
        const isBotDev = interaction.user.id === process.env.DEV_ID;

        if (!isGuildOwner && !isBotDev) {
            // Pra mensagem simples de erro, a gente pode usar o reply padrão do DJS
            return interaction.reply({
                content: '🚫 **Acesso Negado.** Só o patrão tem a chave desse QG.',
                flags: 64 // Só ele vê
            });
        }

        // 2. A Mágica do Components V2 (JSON Bruto)
        // Flag 32832 = 32768 (IS_COMPONENTS_V2) + 64 (EPHEMERAL)
        // Isso obriga o Discord a ignorar "content" e "embeds" e ler a UI que a gente desenhou.
        const rawPayload = {
            flags: 32832, 
            components: [
                {
                    type: 17, // 17 = Container (A caixa que agrupa tudo)
                    accent_color: 0x2b2d31, // Cor da bordinha do container (estilo dark mode)
                    components: [
                        {
                            type: 10, // 10 = Text Display (O texto do topo em Markdown)
                            content: `# 🏢 QG DA FACÇÃO: ${interaction.guild.name}\n\n**Status do Sistema:** 🟢 Online\n**Plano Atual:** 🆓 Freemium\n\nNavegue pelos botões abaixo para gerenciar o QG da cidade.`
                        },
                        {
                            type: 14, // 14 = Separator (Linha divisória pra deixar o design limpo)
                            divider: true,
                            spacing: 2
                        },
                        {
                            type: 1, // 1 = Action Row (A linha que segura os botões)
                            components: [
                                {
                                    type: 2, // 2 = Button
                                    style: 1, // 1 = Primary (Azul)
                                    label: "Departamento de RH",
                                    emoji: { name: "📁" },
                                    custom_id: "menu_rh" // Nosso roteamento cego vai ler isso aqui!
                                },
                                {
                                    type: 2,
                                    style: 2, // 2 = Secondary (Cinza)
                                    label: "Configurações",
                                    emoji: { name: "⚙️" },
                                    custom_id: "menu_config"
                                },
                                {
                                    type: 2,
                                    style: 3, // 3 = Success (Verde)
                                    label: "Ativar Chave VIP",
                                    emoji: { name: "💎" },
                                    custom_id: "menu_vip"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        try {
            // 3. O Pulo do Gato: Injetando na API REST direto!
            // Como o Discord.js nativo pode tentar formatar nosso JSON e apagar os types novos (17, 10),
            // a gente usa o client.rest.post pra responder a interação mandando a estrutura pura pro Discord.
            await client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                {
                    body: {
                        type: 4, // 4 = ChannelMessageWithSource (A resposta inicial do comando)
                        data: rawPayload
                    }
                }
            );
        } catch (error) {
            console.error('[ERRO] Falha ao renderizar a interface V2 do painel:', error);
        }
    }
};