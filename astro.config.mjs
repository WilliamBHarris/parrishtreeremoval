// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://parrishtreeremoval.com',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
