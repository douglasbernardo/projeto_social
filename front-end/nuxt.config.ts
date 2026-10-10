export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    server: {
      allowedHosts: true
    }
  },

  modules: ['@pinia/nuxt'],
})