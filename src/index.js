require('dotenv').config(); // Mantém para testes locais, mas não afeta a nuvem se já injetado
const { execSync } = require('child_process');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

// ==========================================
// 🧠 INTELIGÊNCIA ARTIFICIAL DO BANCO DE DADOS
// ==========================================
console.log('[SISTEMA] Verificando estrutura do Banco de Dados...');
try {
    // Verifica se a variável do banco existe antes de tentar o push
    if (process.env.DATABASE_URL) {
        // Comando puro e direto, forçando o uso do .env
        execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit', env: process.env });
        console.log('[BANCO DE DADOS] Estrutura 100% sincronizada com sucesso!');
    } else {
        console.log('[AVISO] DATABASE_URL não encontrada. Pulando sincronização.');
    }
} catch (error) {
    console.error('[ERRO DO PRISMA] Não foi possível sincronizar as tabelas. Verifique a URL do Supabase/Neon:', error.message);
}

// ==========================================
// 🚀 INICIALIZAÇÃO DO BOT
// ==========================================

// Validação de Segurança para o Token do Discord
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('[ERRO CRÍTICO] O DISCORD_TOKEN não foi encontrado nas variáveis de ambiente da Discloud!');
    process.exit(1); // Desliga o app para não ficar travado no erro do discord.js
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
});

// Collections
client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

// Carrega o núcleo
coreLoader(client);

// Liga a máquina usando a variável que garantimos que existe
client.login(token).then(() => {
    console.log(`[DISCORD] Bot logado com sucesso!`);
}).catch((err) => {
    console.error(`[ERRO DISCORD] Falha ao tentar logar com o token:`, err);
});