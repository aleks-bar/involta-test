// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },

  dir: {
    pages: './src/app/pages',
    layouts: './src/app/layouts',
  },

  alias: {
    '@shared': '/src/shared',
    '@entities': '/src/entities',
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
