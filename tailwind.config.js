/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#F5F1E9',
          100: '#ECE4D5',
          200: '#DCCCB0',
          300: '#CAAD84',
          400: '#B8935D',
          500: '#A67D3D',
          600: '#8C6834',
          700: '#72532A',
          800: '#593F21',
          900: '#402C17',
        },
        forest: {
          50: '#EEFDF2',
          100: '#D4F7D9',
          200: '#A8EEB3',
          300: '#77DE88',
          400: '#4AC75C',
          500: '#2CA73C',
          600: '#1E882C',
          700: '#166A23',
          800: '#11531C',
          900: '#0B3916',
        },
        ocean: {
          50: '#EFF8FF',
          100: '#D6EEFF',
          200: '#ADD7FF',
          300: '#85C0FF',
          400: '#5CA9FF',
          500: '#3392FF',
          600: '#0A7AFF',
          700: '#0065E6',
          800: '#0052B8',
          900: '#00408F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  presets: [require('nativewind/preset')],
  plugins: [require('tailwindcss-animate'), require('tailwindcss-motion')],
}
