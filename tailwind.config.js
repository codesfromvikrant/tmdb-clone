/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b'
      },
      fontFamily: {
        Hind: ['Hind', 'sans-serif'],
        Source: ['"Source Sans Pro"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
