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
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
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
      });
    },
  ],
}