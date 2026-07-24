import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  earlyAccess: true,
  // A propriedade 'url' DEVE estar definida para o 'db push' funcionar no Prisma 7
  url: process.env.DATABASE_URL, 
});