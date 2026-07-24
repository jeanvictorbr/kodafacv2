const { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelSelectMenuBuilder, ChannelType, RoleSelectMenuBuilder } = require('discord.js');
const prisma = require('../../database/prisma'); // Puxa a conexão central já instanciada
module.exports = {
    customId: 'painel_rh_recrutamento',
    async execute(interaction) {
        // Puxar configs da facção no banco de dados
        let faccao = await prisma.faccao.findUnique({
            where: { guildId: interaction.guildId }
        });

        // Se não existir, cria o registro inicial
        if (!faccao) {
            faccao = await prisma.faccao.create({
                data: { guildId: interaction.guildId }
            });
        }

        const canalDiretoria = faccao.canalDiretoria ? `<#${faccao.canalDiretoria}>` : '`Não configurado`';
        const cargoMembro = faccao.cargoMembro ? `<@&${faccao.cargoMembro}>` : '`Não configurado`';

        const content = `
# 🪖 Recrutamento | Setup
> Visão! Aqui você monta a estrutura pra recrutar os morador.

**Status do Setup:**
* 🏛️ **Sala da Diretoria:** ${canalDiretoria}
* 🎖️ **Cargo de Membro:** ${cargoMembro}

*Para a engrenagem girar e você poder spawnar a vitrine pública, defina a Sala da Diretoria (onde caem as fichas) e o Cargo de Membro (dado aos aprovados).*
        `.trim();

        const rowCanais = new ActionRowBuilder().addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId('config_canal_diretoria')
                .setPlaceholder('Selecione a Sala da Diretoria')
                .setChannelTypes(ChannelType.GuildText)
        );

        const rowCargos = new ActionRowBuilder().addComponents(
            new RoleSelectMenuBuilder()
                .setCustomId('config_cargo_membro')
                .setPlaceholder('Selecione o Cargo de Membro')
        );

        const rowBotoes = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('select_canal_recrutamento') // Abre um modal/menu para enviar a vitrine
                .setLabel('Spawnar Vitrine Pública')
                .setEmoji('📢')
                .setStyle(ButtonStyle.Primary)
                // O botão só libera se o setup básico estiver feito
                .setDisabled(!faccao.canalDiretoria || !faccao.cargoMembro), 
            new ButtonBuilder()
                .setCustomId('painel_rh')
                .setLabel('Voltar')
                .setEmoji('⬅️')
                .setStyle(ButtonStyle.Danger)
        );

        await interaction.update({
            content: content,
            embeds: [], // ZERO EMBEDS STRICT
            components: [rowCanais, rowCargos, rowBotoes]
        });
    }
}