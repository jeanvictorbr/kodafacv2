require('dotenv').config();
const { execSync } = require('child_process');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

// ==========================================
// 🧠 INTELIGÊNCIA ARTIFICIAL DO BANCO DE DADOS
// ==========================================
console.log('[SISTEMA] Verificando se há novas tabelas ou alterações no Prisma...');
try {
    // Sincroniza o PostgreSQL com o schema.prisma atual automaticamente
    execSync('npx prisma db push --skip-generate --accept-data-loss', { stdio: 'inherit' });
    console.log('[BANCO DE DADOS] Sincronização concluída! Estrutura 100% atualizada.');
} catch (error) {
    console.error('[ERRO CRÍTICO] O bot não conseguiu sincronizar as tabelas:', error);
}

// ==========================================
// 🚀 INICIALIZAÇÃO DO BOT
// ==========================================
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
});

// Collections para o nosso sistema modular
client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

// Chama o núcleo que carrega botões, modais e comandos
coreLoader(client);

// Liga a máquina
client.login(process.env.DISCORD_TOKEN);