/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./usuario.html",
    "./cliente.html",
    "./producto.html",
    "./js/script.js",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '20' },
        },
      },
    },
  },
  plugins: [],
}

