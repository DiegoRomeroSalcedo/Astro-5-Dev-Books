// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public'}), //Astro permite usar .envs de manera integrada como hacemos aquí.
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public'})
    }
  },

  adapter: vercel()
});