/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens:{
       sm: '480px',
       md: '768px',
       lg: '1024px',
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        secondaryColor: '#FFCC00',
        paragraphColor:'#FFCC00',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#0007936',
        redcolor:'#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',

      },
      keyframes:{
        move: {
          "50%": {transform: 'translatey(-2rem)'}
        }
      },
      animation:{
        'movingY': 'move 4s linear infinite'
      }
    },
    container:{
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
   fontFamily:{
    oswald:['oswand','sans-serif'],
    dmsans:['DM Sans', 'sans-serif']
   }
  },
  plugins: [],
}

