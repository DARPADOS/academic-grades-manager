/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))'
      },
      gridTemplateColumns: {
        'fill-80': 'repeat(auto-fill, minmax(20rem, 1fr))',
      },
      colors: {
        'blue-dark': '#1d3557',
        'green-pale': '#f1faee',
        'green': '#a8dadc'
      },
    },
    plugins: [],
  }
}