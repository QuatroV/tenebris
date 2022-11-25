/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      keyframes: {
        "slow-shake": {
          "0%": {transform: 'rotate(0deg)'},
          "33%": {transform: 'rotate(-2deg)'},
          "66%": {transform: 'rotate(2deg)'},
          "100%": {transform: 'rotate(0deg)'},
        }
      },
      animation:{
        "slow-shake": "slow-shake 10s ease infinite",
      },
      fontFamily: {
        'GothicPixels': ['GothicPixels', 'sans-serif']
      },
    },
  },
  plugins: [],
}