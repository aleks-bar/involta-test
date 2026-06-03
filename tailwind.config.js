import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ['page-bg']: '#FBFBFB',
        accent: '#0029FF',
        gray: '#DCDCDC',
      },
    },
  },
  plugins: [],
}
