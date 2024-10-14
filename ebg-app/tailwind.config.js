/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary': '#191919', 
        'secondary': '#FFFFFF',
        'underline' : '#191919',
        'grey':'#767A79',
        'pink':'#FFFAEA',
        'dark_grey': '#484138',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.text-dark':{
          color:'#191919',
        },
        '.text-grey':{
          color:theme('colors.grey'),
        },
        '.bg-grey':{
          background:theme('colors.grey'),
        },
        '.dark_grey':{
          color:theme('colors.dark_grey'),
        },
        'bg-lightgrey':{
          background: 'linear-gradient(180deg, #E0E0E0 0%, rgba(249, 249, 249, 0) 100%)'},
        '.grey-gradient' :{
          background:'linear-gradient(140deg, rgba(88,88,88,1) 14%, rgba(26,26,26,1) 100%)'}, 
          '.bg-pink':{backgroundColor:theme('colors.pink')},
        '.black-btn': {
          backgroundColor: theme('colors.primary'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'background-color 0.3s ease',
          
          '&:hover': {
            backgroundColor: theme('colors.zinc.950'),
          },
        },
        '.white-btn': {
          backgroundColor: theme('colors.secondary'),
          color: theme('colors.zinc.900'),
          border: `1px solid ${theme('colors.white')}`,
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'background-color 0.3s ease',
          // '&:hover': {
          //   backgroundColor: 'rgba(0, 0, 0, .5)',
          //   border: `1px solid rgba(255, 255, 255, .5)`,
          //   color: theme('colors.white'),
          // },
        },
        '.outline-btn': {
          backgroundColor: 'rgba(0, 0, 0, .5)',
          border: `1px solid rgba(255, 255, 255, .5)`,
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.secondary'),
            color: theme('colors.zinc.900'),
          },
        },
        '.underline-btn':{
          position: 'relative',
          '&::before': {
            width: '100%',
            height: '3px',
            borderBottom: '2px solid',
            position: 'absolute',
            bottom: '-7px',
          },
        }
      });
    },
    function ({ addBase, theme }) {
      addBase({
        'p': { 
          color: theme('colors.grey') 
        },
      });
    },
  ],
 
   
  
}