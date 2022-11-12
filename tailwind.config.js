module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
          contrast: 'var(--background-contrast)',
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
