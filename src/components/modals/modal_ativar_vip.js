// Importa o Prisma otimizado que não derruba a conexão
const prisma = require('../../database/prisma');

module.exports = {
    customId: 'modal_ativar_vip', // Tem que ser exatamente o mesmo ID enviado no arquivo de cima
    
    async execute(interaction) {
        
        // Segura a resposta pro Discord não dar "Interação Falhou" enquanto o banco pensa
        await interaction.deferReply({ ephemeral: true });

        let keyDigitada = "ERRO";
        
        try {
            // Acessando o valor do campo de texto com a função nativa
            keyDigitada = interaction.fields.getTextInputValue('input_vip_key');
        } catch (error) {
            // Fallback caso a estrutura V2 retorne os dados de forma um pouco diferente
            keyDigitada = interaction.components[0]?.components[0]?.value || "ERRO";
        }

        if (keyDigitada === "ERRO") {
            return interaction.editReply({ content: '❌ **Visão errada!** Não consegui ler o código digitado. Tenta novamente.' });
        }

        try {
            // ==========================================
            // 🚀 LÓGICA DE VALIDAÇÃO (PRISMA DB)
            // ==========================================
            
            // 1. Busca a chave no banco de dados
            const keyData = await prisma.chaveVIP.findUnique({ 
                where: { keyCode: keyDigitada } 
            });
            
            // 2. Se a chave não existir ou já tiver sido usada, barra o cara na hora
            if (!keyData || keyData.usada) {
                 return interaction.editReply({ 
                     content: '❌ **Visão errada!** Essa chave não existe no fornecedor ou já foi resgatada por outra facção.' 
                 });
            }

            // 3. Calcula a data de vencimento baseada nos dias que a Key fornece
            const dataVencimento = new Date();
            dataVencimento.setDate(dataVencimento.getDate() + keyData.dias);

            // 4. Upsert (Atualiza se existir, Cria se não existir) o registro da Facção botando os cara no VIP
            await prisma.faccao.upsert({
                where: { guildId: interaction.guild.id },
                update: { 
                    isPremium: true, 
                    premiumVenceEm: dataVencimento 
                },
                create: {
                    guildId: interaction.guild.id,
                    nomeFac: interaction.guild.name,
                    isPremium: true,
                    premiumVenceEm: dataVencimento
                }
            });
            
            // 5. Queima a chave pra ninguém usar de novo (update pra usada = true)
            await prisma.chaveVIP.update({
                where: { keyCode: keyDigitada },
                data: { usada: true }
            });

            console.log(`[SISTEMA VIP] A facção ${interaction.guild.name} ativou a key: ${keyDigitada}`);

            // 6. Retorno de Sucesso com a data de vencimento calculada
            await interaction.editReply({
                content: `✅ **Aulas, chefe!** A chave \`${keyDigitada}\` foi validada e queimada.\nO seu QG agora é **VIP** até \`${dataVencimento.toLocaleDateString('pt-BR')}\`. Todo o Arsenal tá liberado pra tropa.`
            });

        } catch (error) {
            console.error('[ERRO BANCO DE DADOS - VIP]:', error);
            await interaction.editReply({ 
                content: '⚠️ **Deu ruim no sistema!** O banco de dados não respondeu. Chama a staff da Koda Studios.' 
            });
        }
    }
};