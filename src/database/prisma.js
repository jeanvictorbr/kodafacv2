const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('./generated/client');

// Puxa a URL do seu .env
const connectionString = process.env.DATABASE_URL;

// Configura o motor de conexão nativo do PostgreSQL
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Inicia o Prisma usando o adaptador
const prisma = new PrismaClient({ adapter });

module.exports = prisma;