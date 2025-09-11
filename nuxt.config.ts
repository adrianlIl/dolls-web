// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  pages: true,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/dolls-web/' : '/'
  },
  css: ['~/assets/css/global.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
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
