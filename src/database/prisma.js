const { PrismaClient } = require('@prisma/client');

// Cria o Client do Prisma
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Evita que o hot-reload do Node multiplique as conexões (Padrão Singleton)
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
    globalThis.prismaGlobal = prisma;
}

console.log('[BANCO DE DADOS] Prisma ORM conectado com sucesso na base.');

module.exports = prisma;