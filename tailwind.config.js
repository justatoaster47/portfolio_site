/** @type {import('tailwindcss').Config} */
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
        'text': '#0a140d',
        'background': '#f5faf6',
        'primary': '#71b7a9',
        'secondary': '#c5d9e2',
        'accent': '#497c92',
      }
    },
  },
  plugins: [],
}
