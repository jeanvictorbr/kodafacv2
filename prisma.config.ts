import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  earlyAccess: true,
  // Força o Prisma a procurar no ambiente (Discloud) ou no arquivo local
  url: process.env.DATABASE_URL, 
});