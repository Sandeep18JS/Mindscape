/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '044F6B': '#044F6B',
        '0A6E8F': '#0A6E8F',
        '33A4C3': '#33A4C3',
        '787C83': '#787C83',
        'CED4D8': '#CED4D8',
        '1b92a8': '#1b92a8',
        '2d3c54': '#2d3c54',
        '192231': '#192231',
        '030408': '#030408'
      },
      margin: {
        '350px': '370px',
        '360px': '320px',
        '370px': '400px',

      },
    },
  },
  plugins: [],
}