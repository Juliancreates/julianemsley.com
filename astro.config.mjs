import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.julianemsley.com',
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    assets: '_assets',
  },
});
