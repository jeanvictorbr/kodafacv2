const { PrismaClient } = require('./generated/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

// 1. Cria a pool de conexão do PostgreSQL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Cria o adaptador pro Prisma
const adapter = new PrismaPg(pool);

// 3. Passa o adaptador no construtor do Prisma (Exigência do v7)
const prisma = new PrismaClient({ adapter });

module.exports = prisma;