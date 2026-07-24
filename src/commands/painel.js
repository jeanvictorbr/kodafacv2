const { SlashCommandBuilder } = require('discord.js');

// 1. LISTA CENTRAL DE MÓDULOS (Fácil de adicionar novos depois)
const todosModulos = [
    { 
        id: "painel_rh", 
        texto: "**📋 Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH." 
    },
    { 
        id: "painel_arsenal", 
        texto: "**🔫 Arsenal & Baú** 💎\n`[REQUER VIP]` Auditoria de estoque e caixa 2." 
    },
    { 
        id: "painel_tribunal", 
        texto: "**⚖️ Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP." 
    },
    { 
        id: "painel_frota", 
        texto: "**🚁 Controle de Frota**\nGaragem virtual, acionamento de seguro e registro de veículos." 
    },
    { 
        id: "painel_mercado", 
        texto: "**🤝 Mercado Negro**\nClassificados da facção e negociação de itens entre membros." 
    }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão com paginação (V2 Components).'),

    async execute(interaction) {
        const v2Flags = 32768 | 64; // IS_COMPONENTS_V2 + Ephemeral
        const dataAtual = new Date().toLocaleDateString('pt-BR');

        // --- SISTEMA DE PAGINAÇÃO ---
        const page = 1; // Como é o comando /painel, sempre abre na página 1
        const itemsPerPage = 3;
        const totalPages = Math.ceil(todosModulos.length / itemsPerPage);
        
        // Pega apenas os módulos da página atual
        const modulosDaPagina = todosModulos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        // Transforma nossos dados na estrutura "Section" da V2
        const sectionsV2 = modulosDaPagina.map(modulo => ({
            type: 9, // Section
            components: [{ type: 10, content: modulo.texto }],
            accessory: { type: 2, style: 2, label: "Explorar", custom_id: modulo.id }
        }));

        // Cria os botões de navegação (Anterior / Atual / Próxima)
        const rowPaginacao = {
            type: 1, // Action Row
            components: [
                { 
                    type: 2, style: 2, label: "⬅️ Anterior", custom_id: `painel_page_${page - 1}`, 
                    disabled: page === 1 // Desativa se estiver na primeira página
                },
                { 
                    type: 2, style: 2, label: `Página ${page}/${totalPages}`, custom_id: "none_page", 
                    disabled: true // Botão falso só pra mostrar a página atual
                },
                { 
                    type: 2, style: 2, label: "Próxima ➡️", custom_id: `painel_page_${page + 1}`, 
                    disabled: page === totalPages // Desativa se estiver na última página
                }
            ]
        };

        // --- CONSTRUÇÃO DO PAYLOAD JSON ---
        const rawPayload = {
            flags: v2Flags,
            components: [
                {
                    type: 17, // Container Component
                    accent_color: 0xFF0000, 
                    components: [
                        {
                            type: 12, // Banner
                            items: [{ media: { url: "https://i.imgur.com/Mq0POnA.gif" } }]
                        },
                        {
                            type: 10, // Título principal
                            content: "# 💼 QG DO PATRÃO | Central de Gestão\nVisão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo."
                        },
                        { type: 14, divider: true, spacing: 1 }, // Linha divisória
                        {
                            type: 10,
                            content: "**Status atual:** `Plano Cria (Grátis)`"
                        },
                        
                        // Injeta os módulos da página atual gerados automaticamente ali em cima
                        ...sectionsV2,

                        { type: 14, divider: true, spacing: 1 },
                        
                        // Injeta a linha de botões de paginação
                        rowPaginacao,

                        {
                            type: 1, // Action Row separada para a Key VIP (Destaque total)
                            components: [
                                { type: 2, style: 3, label: "Resgatar Chave VIP", custom_id: "painel_ativar_key", emoji: { name: "🔑" } }
                            ]
                        },
                        {
                            type: 10, // Rodapé
                            content: `-# KODA STUDIOS | #Tropa • ${dataAtual}`
                        }
                    ]
                }
            ]
        };

        // Dispara pra API do Discord
        try {
            await interaction.client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                { body: { type: 4, data: rawPayload } }
            );
        } catch (error) {
            console.error('[ERRO V2 COMPONENTS]:', error);
        }
    },
};