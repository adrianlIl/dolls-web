// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  pages: true,
  app: {
    baseURL: '/dolls-web/'  // 你的 repo 名稱
  },
  css: ['~/assets/css/global.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  vite: {
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
