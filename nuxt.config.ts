// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },

  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
  },
  compatibilityDate: '2025-07-15',

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
    },
  },
})
