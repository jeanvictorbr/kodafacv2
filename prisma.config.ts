import { defineConfig } from '@prisma/config';

export default defineConfig({
  migrate: {
    database: {
      url: process.env.DATABASE_URL,
    },
  },
});