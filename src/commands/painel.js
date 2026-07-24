const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');

module.exports = {
    // 1. Definição do Comando (O que aparece quando digita /)
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão para gerenciar a facção.'),

    // 2. Execução do Comando
    async execute(interaction, client) {
        
        // (Opcional) Trava de segurança: Só quem tem permissão de Admin pode abrir o painel
        /*
        if (!interaction.member.permissions.has('Administrator')) {
            return interaction.reply({
                content: '🚫 **Visão errada!** Você não tem acesso de chefia para abrir o QG.',
                flags: MessageFlags.Ephemeral
            });
        }
        */

        // 3. Construção do Visual Limpo e Otimizado (Novo Markdown do Discord)
        // Dica: Cuidado com a indentação aqui dentro da crase. O Discord lê os espaços, 
        // então deixe colado no canto esquerdo.
        const painelTexto = `
# 💼 QG do Patrão | Central de Gestão
*Visão, chefe! O que vamos adiantar hoje? Escolhe a fita aí embaixo.*
---
**Status da Firma:** 🔴 \`Plano Cria (Grátis)\`
*Ative uma Key para liberar o arsenal completo e automatizar a gestão.*

### 📋 Gestão da Rapaziada
> Recrutamento, Ponto, Metas de Farm e RH da sua facção.

### 🔫 Arsenal & Baú 💎
> \`[REQUER VIP]\` Auditoria de estoque, lavagem de dinheiro e caixa 2.

### ⚖️ Tribunal do Crime
> Sistema de multas, cobranças, strikes e XP de Fidelidade.
`;

        // 4. Criação dos Components (Botões divididos em "Prateleiras" / Action Rows)
        // Primeira linha de botões: Os Módulos
        const rowModulos = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_rh')
                .setLabel('📋 Gestão e RH')
                .setStyle(ButtonStyle.Primary), // Azul (Ação principal)
                
            new ButtonBuilder()
                .setCustomId('painel_arsenal')
                .setLabel('🔫 Arsenal (VIP)')
                .setStyle(ButtonStyle.Secondary), // Cinza (Deixamos clicável para vender o upsell do VIP)
                
            new ButtonBuilder()
                .setCustomId('painel_tribunal')
                .setLabel('⚖️ Tribunal')
                .setStyle(ButtonStyle.Danger) // Vermelho
        );

        // Segunda linha de botões: Ações da Conta (VIP)
        const rowConta = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_ativar_key')
                .setLabel('🔑 Resgatar Chave VIP')
                .setStyle(ButtonStyle.Success) // Verde
        );

        // 5. Envio da Resposta
        // Usamos as flags para garantir o envio oculto (ephemeral) que não gasta rate limit visual do servidor
        await interaction.reply({
            content: painelTexto.trim(), // trim() corta qualquer linha em branco sobrando no início/fim
            components: [rowModulos, rowConta],
            flags: MessageFlags.Ephemeral 
        });
    },
};