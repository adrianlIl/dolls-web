// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  pages: true,
  app: {
    baseURL: '/'
  },
  css: ['~/assets/css/global.css'],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.trycloudflare.com'
      ]
    }
  }
})
