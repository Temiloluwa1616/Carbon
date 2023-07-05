/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      corePlugins: {
        // ...
        transitionProperty: true,
        translate: true,
      },

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'HeroBG': "url('/src/assets/mypngs/HeroImg.jpg')",
        'mainBG': "url('/src/assets/mainBG.png')",
        'polygon': "url('/src/assets/mypngs/Polygon.png')",
        'polygont': "url('/src/assets/mypngs/Polygont.png')"
      },

      screens: {
        md: { min: "415px", max: "800px" },

        

        sm: { max: "414px" }
      },

    },
  },
  plugins: [],
}

