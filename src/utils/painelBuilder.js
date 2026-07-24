const todosModulos = [
    { id: "painel_rh", texto: "**📋 Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH." },
    { id: "painel_arsenal", texto: "**🔫 Arsenal & Baú** 💎\n`[REQUER VIP]` Auditoria de estoque e caixa 2." },
    { id: "painel_tribunal", texto: "**⚖️ Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP." },
    { id: "painel_frota", texto: "**🚁 Controle de Frota**\nGaragem virtual, acionamento de seguro e registro de veículos." },
    { id: "painel_mercado", texto: "**🤝 Mercado Negro**\nClassificados da facção e negociação de itens entre membros." }
];

function buildPainelPayload(page = 1) {
    const v2Flags = 32768 | 64; // IS_COMPONENTS_V2 + Ephemeral
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    const itemsPerPage = 3;
    const totalPages = Math.ceil(todosModulos.length / itemsPerPage);
    
    // Trava de segurança para não bugar as páginas
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const modulosDaPagina = todosModulos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const sectionsV2 = modulosDaPagina.map(modulo => ({
        type: 9, 
        components: [{ type: 10, content: modulo.texto }],
        accessory: { type: 2, style: 2, label: "Explorar", custom_id: modulo.id }
    }));

    const rowPaginacao = {
        type: 1, 
        components: [
            { type: 2, style: 2, label: "⬅️ Anterior", custom_id: `painel_page_${page - 1}`, disabled: page === 1 },
            { type: 2, style: 2, label: `Página ${page}/${totalPages}`, custom_id: "none_page", disabled: true },
            { type: 2, style: 2, label: "Próxima ➡️", custom_id: `painel_page_${page + 1}`, disabled: page === totalPages }
        ]
    };

    return {
        flags: v2Flags,
        components: [
            {
                type: 17, // Container
                accent_color: 0xFF0000, 
                components: [
                    { type: 12, items: [{ media: { url: "https://i.imgur.com/Mq0POnA.gif" } }] },
                    { type: 10, content: "# 💼 QG DO PATRÃO | Central de Gestão\nVisão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo." },
                    { type: 14, divider: true, spacing: 1 },
                    { type: 10, content: "**Status atual:** `Plano Cria (Grátis)`" },
                    
                    ...sectionsV2,
                    
                    { type: 14, divider: true, spacing: 1 },
                    rowPaginacao,
                    { type: 1, components: [{ type: 2, style: 3, label: "Resgatar Chave VIP", custom_id: "painel_ativar_key", emoji: { name: "🔑" } }] },
                    { type: 10, content: `-# KODA STUDIOS | #Tropa • ${dataAtual}` }
                ]
            }
        ]
    };
}

module.exports = { buildPainelPayload };