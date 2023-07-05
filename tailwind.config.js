/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
      

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'mainBG': "url('/src/assets/mainBG.png')"
      }

    },
  },
  plugins: [],
}

