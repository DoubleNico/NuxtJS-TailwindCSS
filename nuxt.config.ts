// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  i18n: {
    locales: [
      {
        name: 'Română',
        code: 'ro',
        language: 'ro-RO',
        file: 'ro-RO.json',
      },
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en-US.json',
      },
    ],
    langDir: './locales',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  css: ['~/assets/css/tailwind.css'],
})
