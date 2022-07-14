const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.{md,vue}',
		'./docs/components/**/*.vue',
		'./docs/logo.svg',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Madurai', ...defaultTheme.fontFamily.sans],
        serif: ['Titillium Web', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
