/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      "xs": 14,
      "sm": 16,
      "md": 18,
      "lg": 20,
      "xl": 24,
      "2xl": 32,
    },
    colors: {
      cyan: "#61DAFB",
      black: "#000000", 
      white: "#FFFFFF",
      gold: {
        50: '#93897B',
        100: '#9A8A72',
        200: '#A18B69',
        300: '#A98C60',
        400: '#B08D58',
        500: '#B38D54',
        600: '#B78E4F',
        700: '#BD8F48',
        800: '#C38F41',
        900: '#CB9038',
      },
      gray: {
        50: '#97989E',
        100: '#898A8F',
        200: '#7C7D82',
        300: '#6E6F74',
        400: '#5D5E63',
        500: '#515257',
        600: '#45464B',
        700: '#37383C',
        800: '#2C2D31',
        900: '#212125',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
