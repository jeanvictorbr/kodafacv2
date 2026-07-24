const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão para gerenciar a facção.'),

    async execute(interaction, client) {
        // 1. OTIMIZAÇÃO ANTI-LAG (Resolve o erro "Não respondeu a tempo")
        // O deferReply avisa o Discord: "Espera aí que o pai tá processando", dando 15 segundos pro bot pensar.
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });

        // 2. CONSTRUÇÃO DA EMBED CLEAN (Estilo da image_781be0.jpg)
        const painelEmbed = new EmbedBuilder()
            .setColor('#FF0000') // A cor da barra lateral (Vermelho)
            .setImage('https://i.imgur.com/XU9nO0J.png') // Coloque aqui o link direto (imgur/discord) do seu BANNER GRANDE
            .setTitle('QG DO PATRÃO | Central de Gestão')
            .setDescription('Visão, chefe! O que vamos adiantar hoje? Escolha a fita aí embaixo.\n\n**A partir de** `Plano Cria (Grátis)`\nAtive uma Key VIP para liberar o arsenal completo e automatizar a gestão.')
            .addFields(
                { name: '📋 Gestão da Rapaziada', value: 'Recrutamento, Ponto, Metas de Farm e RH da sua facção.' },
                { name: '🔫 Arsenal & Baú 💎', value: '`[REQUER VIP]` Auditoria de estoque, lavagem de dinheiro e caixa 2.' },
                { name: '⚖️ Tribunal do Crime', value: 'Sistema de multas, cobranças, strikes e XP de Fidelidade.' }
            )
            .setFooter({ text: `KODA STUDIOS | #Tropa • ${new Date().toLocaleDateString('pt-BR')}` }); // Rodapé idêntico ao da print

        // 3. CRIAÇÃO DOS BOTÕES
        const rowModulos = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_rh')
                .setLabel('Gestão e RH')
                .setEmoji('📋')
                .setStyle(ButtonStyle.Primary), // Azul
                
            new ButtonBuilder()
                .setCustomId('painel_arsenal')
                .setLabel('Arsenal (VIP)')
                .setEmoji('🔫')
                .setStyle(ButtonStyle.Secondary), // Cinza (estilo o botão "Ver opções" da sua print)
                
            new ButtonBuilder()
                .setCustomId('painel_tribunal')
                .setLabel('Tribunal')
                .setEmoji('⚖️')
                .setStyle(ButtonStyle.Danger) // Vermelho
        );

        const rowConta = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_ativar_key')
                .setLabel('Resgatar Chave VIP')
                .setEmoji('🔑')
                .setStyle(ButtonStyle.Success) // Verde
        );

        // 4. ENVIO DA RESPOSTA
        // Como usamos deferReply lá em cima, agora usamos editReply para entregar a mensagem pronta
        await interaction.editReply({
            embeds: [painelEmbed],
            components: [rowModulos, rowConta]
        });
    },
};