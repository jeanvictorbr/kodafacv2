module.exports = {
    customId: 'painel_ativar_key', // O ID exato do botão VIP no painel
    
    async execute(interaction) {
        
        // CONSTRUINDO O MODAL V2 (COM LABEL TYPE 18)
        const modalPayload = {
            custom_id: "modal_ativar_vip",
            title: "Resgatar Chave VIP",
            components: [
                {
                    type: 18, // Label Component (O substituto clean da velha Action Row)
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
            // Type 9 = Modal CallBack (Abre a janela na tela do usuário)
            await interaction.client.rest.post(
                `/interactions/${interaction.id}/${interaction.token}/callback`,
                { body: { type: 9, data: modalPayload } }
            );
        } catch (error) {
            console.error('[ERRO AO ABRIR MODAL V2]:', error);
        }
    }
};