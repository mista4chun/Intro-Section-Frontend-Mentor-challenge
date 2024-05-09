/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '978px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        almostWhite: 'hsl(0, 0%, 98%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        almostBlack: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
