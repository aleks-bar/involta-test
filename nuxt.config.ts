// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts'
  }
})
