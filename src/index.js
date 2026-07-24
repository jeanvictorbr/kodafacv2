const fs = require('fs');
const { execSync } = require('child_process');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

// ==========================================
// 🧹 LIMPANDO A SUJEIRA DA DISCLOUD
// ==========================================
// Removemos o require('dotenv') porque na nuvem ele só atrapalha.
try {
    if (fs.existsSync('.env')) {
        // Tenta apagar o .env fantasma via código
        fs.unlinkSync('.env');
        console.log('[SISTEMA] Arquivo .env fantasma deletado com sucesso!');
    }
} catch (e) {
    console.log('[SISTEMA] O .env está bloqueado pela Discloud. Tudo bem, vamos seguir...');
}

console.log('[SISTEMA] Lendo variáveis de ambiente do servidor...');

const token = process.env.DISCORD_TOKEN;
const dbUrl = process.env.DATABASE_URL;

// ==========================================
// 🛡️ SISTEMA ANTICRASH (KEEP-ALIVE)
// ==========================================
if (!token || !dbUrl) {
    console.error('====================================================');
    console.error('[ERRO CRÍTICO] As variáveis não foram injetadas no container!');
    console.error('Isso acontece porque o Deploy do GitHub não injeta variáveis novas.');
    console.error('-> VÁ NO PAINEL DA DISCLOUD E CLIQUE NO BOTÃO DE REINICIAR (RESTART) MANUALMENTE!');
    console.error('====================================================');
    
    // TRUQUE DE MESTRE: Mantém o bot "ligado" (online) para a Discloud destravar seus arquivos!
    setInterval(() => console.log('Aguardando você clicar em Reiniciar lá no painel...'), 15000);
    return; // Para a execução do bot aqui, sem dar crash
}

console.log('[SISTEMA] Variáveis encontradas! Iniciando sincronização do Banco...');

// ==========================================
// 🧠 INTELIGÊNCIA ARTIFICIAL DO BANCO DE DADOS
// ==========================================
try {
    // Passamos o process.env direto pro Prisma não se perder
    execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit', env: process.env });
    console.log('[BANCO DE DADOS] Estrutura 100% sincronizada com sucesso!');
} catch (error) {
    console.error('[ERRO DO PRISMA] Falha ao sincronizar:', error.message);
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

client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

coreLoader(client);

client.login(token).then(() => {
    console.log(`[DISCORD] Bot logado com sucesso!`);
}).catch((err) => {
    console.error(`[ERRO DISCORD] Falha ao tentar logar com o token:`, err);
});