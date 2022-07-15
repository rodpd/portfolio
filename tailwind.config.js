/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#050A30',
        'navyblue': '#000C66',
        'normalblue': '#0000FF',
        'babyblue': '#7EC8E3'
      }
    },
  },
  plugins: [],
}
