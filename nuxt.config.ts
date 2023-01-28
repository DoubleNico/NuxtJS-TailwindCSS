// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/color-mode',
      {
        fallback: 'light', // fallback value if not system preference found
      },
    ],
  ],
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt JS + Tailwind CSS',
      meta: [
        {
          name: 'description',
          content: 'A cool website with support for ESLINT and Prettier',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://raw.githubusercontent.com/nuxt/nuxt.js/master/.github/nuxt.png',
        },
      ],
    },
  },
})
