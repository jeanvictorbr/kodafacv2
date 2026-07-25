const { REST, Routes } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`🔥 [KODA] Tropa na pista. Logado como ${client.user.tag}`);

        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
        const commands = client.commands.map(cmd => cmd.data.toJSON());

        try {
            console.log('🔄 [API] Sincronizando os comandos (/) com o Discord...');
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands }
            );
            console.log('✅ [API] Tudo nos conformes. Comandos sincronizados!');
        } catch (error) {
            console.error('❌ [API] Deu B.O na hora de sincronizar:', error);
        }
    }
};