/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': [ "Inter"]
      },
      spacing: {
        'base': '78.3rem',
        '1': '1.125rem'
      },
      colors: {
        brand: {
          gray: {
            100: '#D9D9D9',
            500: '#667085',
          },
          pink: {
            400: '#E7ECF8'
          }
        }
      }
    },
  },
  plugins: [],
}

