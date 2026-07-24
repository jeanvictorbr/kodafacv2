const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('painel')
        .setDescription('Abre o QG do Patrão para gerenciar a facção.'),

    async execute(interaction, client) {
        // Segura a interação para não dar o erro de tempo limite
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });

        // A MÁGICA DO VISUAL "CONTAINER" ACONTECE AQUI
        const painelEmbed = new EmbedBuilder()
            .setColor('#FF0000') // A cor da barra lateral (Vermelha igual da Fire)
            // IMPORTANTE: Coloque um link real aqui! Se o link for falso, o layout quebra igual na sua print.
            .setImage('https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2ce2433db9b897858bf4.gif') // Coloquei um banner de anime genérico só pra você ver funcionando perfeitamente.
            .setTitle('QG DO PATRÃO | Central de Gestão') // Fica em negrito grandão (estilo o GROW A GARDEN)
            .setDescription(`**Status atual:** \`Plano Cria (Grátis)\`\nClique nos botões abaixo para gerenciar os setores.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📋 **Gestão da Rapaziada**\nRecrutamento, Ponto, Metas de Farm e RH.\n\n🔫 **Arsenal & Baú** 💎\n\`[REQUER VIP]\` Auditoria de estoque e caixa 2.\n\n⚖️ **Tribunal do Crime**\nSistema de multas, cobranças, strikes e XP.`)
            .setFooter({ text: `KODA STUDIOS | #Tropa • ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}` });

        // CRIANDO OS BOTÕES (Estilo o "Ver opções")
        const rowModulos = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_rh')
                .setLabel('Gestão e RH')
                .setEmoji('📋')
                .setStyle(ButtonStyle.Secondary), // Secondary deixa o botão cinza chique igual da print
                
            new ButtonBuilder()
                .setCustomId('painel_arsenal')
                .setLabel('Arsenal (VIP)')
                .setEmoji('🔫')
                .setStyle(ButtonStyle.Secondary),
                
            new ButtonBuilder()
                .setCustomId('painel_tribunal')
                .setLabel('Tribunal')
                .setEmoji('⚖️')
                .setStyle(ButtonStyle.Secondary) 
        );

        const rowConta = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('painel_ativar_key')
                .setLabel('Resgatar Chave VIP')
                .setEmoji('🔑')
                .setStyle(ButtonStyle.Success)
        );

        // Enviando a mensagem editada
        await interaction.editReply({
            embeds: [painelEmbed],
            components: [rowModulos, rowConta]
        });
    },
};