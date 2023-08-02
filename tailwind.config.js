/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        // 'text': '#000000',
        'textcolor': colors.stone[900],
        'hovertextcolor': colors.stone[700],
        'background': colors.stone[400],
        'primary': colors.neutral[200],
        'secondary': colors.stone[600],
        'third': colors.slate[400],
        'accent': colors.blue[400],
      }
    },
  },
  plugins: [],
}
