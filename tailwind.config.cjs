/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'base': '#f3f3f3',
        'base-dark': '#202020',
        'text': '000000e4',
        'fill': '#ffffffb3',
        'fill-dark': '#ffffff0f',
        'stroke': '#0000002f',
        'stroke-dark': '#ffffff12'
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    }
  },
  darkMode: 'media',
  plugins: [],
}
