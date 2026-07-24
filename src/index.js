require('dotenv').config();
const { execSync } = require('child_process');

// ==========================================
// 🚀 INJEÇÃO DE BUILD PARA A DISCLOUD
// ==========================================
// Como a Discloud ignora o npm start, nós mesmos rodamos o Prisma no boot.
try {
    console.log('[SISTEMA] Forçando a compilação do Prisma Client...');
    
    // Isso aqui vai executar o comando no terminal do container antes do bot ligar
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    console.log('[SISTEMA] Prisma Client gerado com sucesso! Iniciando bot...');
} catch (error) {
    console.error('[ERRO FATAL] Falha ao compilar o Prisma. Verifique seu schema.prisma!', error);
}

// Depois que gerar o Prisma, aí sim a gente puxa as dependências do Discord!
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const coreLoader = require('./handlers/loader');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
});

// Collections para o nosso sistema inteligente
client.commands = new Collection();
client.buttons = new Collection(); 
client.modals = new Collection(); 

// Chama o núcleo que carrega tudo
coreLoader(client);

// Liga a máquina
client.login(process.env.DISCORD_TOKEN);