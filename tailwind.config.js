module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fo': ['"Shadows Into Light"', 'cursive']
      },
      colors : {
        thatpurple : '#7f5af0',
        thatwhite : '#fffffe',
        thatgreen : '#2cb67d',
        darkbg : '#16161a',
        lightbg : '#242629',
        paragraph : '#94a1b2'
      }
    },
  },
  plugins: [],
}
