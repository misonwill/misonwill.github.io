import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://williammison.online/',
    markdown: {
        syntaxHighlight: 'prism',
      },
});