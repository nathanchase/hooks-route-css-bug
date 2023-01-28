import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'Test',
        path: '/a/path/to/test',
        file: path.join(__dirname, './pages/test/index.vue'),
      });
    },
  },
});
