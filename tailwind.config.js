module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f7fafc',
          dark: '#1a202c',
        },
      },
    },
  },
  variants: {},
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
