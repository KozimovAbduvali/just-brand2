/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': [ "Inter", "sans-serif"]
      },
      spacing: {
        'base': '78.3rem',
        '1': '1.125rem'
      }
    },
  },
  plugins: [],
}

