/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dms: ["DM Sans", "sans-serif"],
        robo: ["Roboto", "sans-serif"]
      },
      colors : {
        primary : '#04FF1D',
        'primary-l' : '#E1FEE4' 
      }
    },
  },
  plugins: [],
}
