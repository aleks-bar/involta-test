import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '20px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1060px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ['page-bg']: '#FBFBFB',
        accent: '#0029FF',
        gray: '#DCDCDC',
        ['gray-border']: '#E5E5E5',
      },

      boxShadow: {
        default: '0 1px 4px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
