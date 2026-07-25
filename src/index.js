 // Mantém para testes locais, mas não afeta a nuvem se já injetado
const { execSync } = require('child_process');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

// ==========================================
// 🧠 INTELIGÊNCIA ARTIFICIAL DO BANCO DE DADOS
// ==========================================
try {
    if (process.env.DATABASE_URL) {
        // Passamos a URL diretamente no comando usando a flag --url
        execSync(`npx prisma db push --accept-data-loss --url="${process.env.DATABASE_URL}"`, { stdio: 'inherit', env: process.env });
        console.log('[BANCO DE DADOS] Estrutura 100% sincronizada com sucesso!');
    } else {
        console.log('[AVISO] DATABASE_URL não encontrada. Pulando sincronização.');
    }
} catch (error) {
    console.error('[ERRO DO PRISMA] Não foi possível sincronizar as tabelas:', error.message);
}

// ==========================================
// 🚀 INICIALIZAÇÃO DO BOT
// ==========================================

// Validação de Segurançasadd para o Token do Discord
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

// Onde você tem as suas collections atuais:
client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
// Carrega o núcleo
coreLoader(client);
// 🟢 ADICIONE ESTA LINHA AQUI:
client.selects = new Collection();

// Liga a máquina usando a variável que garantimos que existe
client.login(token).then(() => {
    console.log(`[DISCORD] Bot logado com sucesso!`);
}).catch((err) => {
    console.error(`[ERRO DISCORD] Falha ao tentar logar com o token:`, err);
});