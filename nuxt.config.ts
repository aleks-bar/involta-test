// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-svgo',
  ],
  devtools: { enabled: true },

  dir: {
    pages: './src/app/pages',
    layouts: './src/app/layouts',
  },

  alias: {
    '@shared': '/src/shared',
    '@entities': '/src/entities',
    '@features': '/src/features',
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

  svgo: {
    autoImportPath: './src/app/assets/icons/',
  },
})
