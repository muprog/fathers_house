/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002F72',
        secondary: '#0D57BE',
      },
      fontFamily: {
        secondary: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
