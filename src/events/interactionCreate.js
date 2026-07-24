const { buildPainelPayload } = require('../utils/painelBuilder');
// Aqui depois vamos importar o Prisma: const prisma = require('../database/prisma');

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        
        // ==========================================
        // 1. HANDLER DE COMANDOS (Slash Commands /)
        // ==========================================
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error('[ERRO COMANDO]:', error);
                const errorMsg = { content: '🚫 **Visão errada!** Deu ruim ao executar esse comando, chefe.', ephemeral: true };
                
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(errorMsg);
                } else {
                    await interaction.reply(errorMsg);
                }
            }
        }
        
        // ==========================================
        // 2. HANDLER DE BOTÕES E COMPONENTS V2
        // ==========================================
        else if (interaction.isButton()) {
            const { customId } = interaction;

            // --- SISTEMA DE PAGINAÇÃO DO PAINEL ---
            if (customId.startsWith('painel_page_')) {
                const targetPage = parseInt(customId.split('_')[2]);
                const updatedPayload = buildPainelPayload(targetPage);

                try {
                    await client.rest.post(
                        `/interactions/${interaction.id}/${interaction.token}/callback`,
                        { body: { type: 7, data: updatedPayload } } 
                    );
                } catch (error) {
                    console.error('[ERRO V2 PAGINAÇÃO]:', error);
                }
            }

            // --- SISTEMA DE ABERTURA DOS MÓDULOS ---
            else if (customId === 'painel_ativar_key') {
                
                // CONSTRUINDO O MODAL V2 (COM LABEL TYPE 18)
                const modalPayload = {
                    custom_id: "modal_ativar_vip",
                    title: "Resgatar Chave VIP",
                    components: [
                        {
                            type: 18, // Label Component (Substitui a velha Action Row)
                            label: "Código de Ativação",
                            description: "Insira a key exclusiva adquirida com a Koda Studios.",
                            component: {
                                type: 4, // Text Input Component
                                custom_id: "input_vip_key",
                                style: 1, // 1 = Short (uma linha só)
                                min_length: 5,
                                max_length: 25,
                                placeholder: "Ex: KODA-TRF-9X8B",
                                required: true
                            }
                        }
                    ]
                };

                try {
                    // Type 9 = Modal CallBack
                    await client.rest.post(
                        `/interactions/${interaction.id}/${interaction.token}/callback`,
                        { body: { type: 9, data: modalPayload } }
                    );
                } catch (error) {
                    console.error('[ERRO AO ABRIR MODAL V2]:', error);
                }
            }
            else if (customId === 'painel_rh') {
                await interaction.reply({ content: 'Módulo de Gestão e RH em construção...', ephemeral: true });
            }
            else if (customId === 'painel_arsenal') {
                await interaction.reply({ content: 'Verificando passe VIP...', ephemeral: true });
            }
            else if (customId === 'painel_tribunal') {
                await interaction.reply({ content: 'Módulo de Tribunal em construção...', ephemeral: true });
            }
            else {
                await interaction.deferUpdate().catch(() => {});
            }
        }

        // ==========================================
        // 3. HANDLER DE MODALS (Formulários enviados)
        // ==========================================
        // O Discord.js detecta o ModalSubmit nativamente
        else if (interaction.isModalSubmit()) {
            
            if (interaction.customId === 'modal_ativar_vip') {
                
                // Segura a resposta pro Discord não dar "Interação Falhou" enquanto o banco de dados pensa
                await interaction.deferReply({ ephemeral: true });

                let keyDigitada = "DESCONHECIDA";
                
                try {
                    // Acessando o valor do campo de texto com a função nativa do Discord.js
                    keyDigitada = interaction.fields.getTextInputValue('input_vip_key');
                } catch (error) {
                    // Fallback caso a estrutura V2 retorne os dados de forma diferente da convencional
                    console.error("[AVISO] Falha ao ler campo via getTextInputValue. Tentando leitura bruta...");
                    keyDigitada = interaction.components[0]?.components[0]?.value || "ERRO_DE_LEITURA";
                }

                // ==========================================
                // 🚀 LÓGICA DE VALIDAÇÃO (PRISMA DB) AQUI
                // ==========================================
                
                // 1. Simulação: Buscar a Key no banco
                // const keyExiste = await prisma.chaveVIP.findUnique({ where: { keyCode: keyDigitada } });
                
                // 2. Simulação: Se não existir ou já foi usada
                /* 
                if (!keyExiste || keyExiste.usada) {
                     return interaction.editReply({ content: '❌ **Visão errada!** Essa chave não existe ou já foi resgatada.' });
                }
                */

                // 3. Simulação: Atualizar Facção pra VIP
                /*
                await prisma.faccao.update({
                    where: { guildId: interaction.guild.id },
                    data: { isPremium: true, premiumVenceEm: /* data atual + dias da key *\/ }
                });
                
                await prisma.chaveVIP.update({
                    where: { keyCode: keyDigitada },
                    data: { usada: true }
                });
                */

                console.log(`[SISTEMA VIP] O servidor tentou ativar a key: ${keyDigitada}`);

                // Retorno de Sucesso Otimizado
                await interaction.editReply({
                    content: `✅ **Aulas, chefe!** A chave \`${keyDigitada}\` foi validada com sucesso.\nO seu QG agora tem acesso total ao **Arsenal** e a todas as automações de alto nível.`
                });
            }
        }
    },
};