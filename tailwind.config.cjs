/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // dizendo pro tailwind quais os arquivos q vão usar ele
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 33.3%, #43E7AD 66.6%, #E1D55D 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
