/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'protest-riot': ['"Protest Riot"', 'regular'],
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'bunker': {
        '50': '#f6f7f9',
        '100': '#edeef1',
        '200': '#d6dae1',
        '300': '#b2b9c7',
        '400': '#8995a7',
        '500': '#6a778d',
        '600': '#555f74',
        '700': '#454e5f',
        '800': '#3c4350',
        '900': '#353a45',
        '920': '#23202A',
        '940': '#1E1B24',
        '950': '#181a1f',
    },
    }
  },
  plugins: [],
}

