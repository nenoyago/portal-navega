/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        plans: 'minmax(7.5rem, 23rem) minmax(23rem, 1fr)'
      },
      colors: {
        primary: {
          50: '#e0f7f9',
          100: '#b3ecef',
          200: '#80e0e5',
          300: '#4dd3db',
          400: '#26c8d1',
          500: '#1AAAB2',
          600: '#179aa0',
          700: '#13898e',
          800: '#0f797c',
          900: '#08565b',
        },
        secondary: {
          50: '#F6F6F6',
          100: '#d9d9d9',
          200: '#BDBDBD',
          300: '#b3b3b3',
          400: '#7a7a7a',
          500: '#484848',
          600: '#464646',
          700: '#3c3c3c',
          800: '#2f2f2f',
          900: '#21232A',
        },
        custom: {
          pink: {
            500: '#E22E6F'
          },
          purple: {
            500: '#594CBE'
          }
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
