/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#F6EEE3',  // Sand
          100: '#ECE4D5',
          200: '#DCCCB0',
          300: '#CAAD84',
          400: '#B8935D',
          500: '#A77F63',  // Clay
          600: '#8D6E56',
          700: '#72532A',
          800: '#3B2F2F',  // Cocoa
          900: '#2A2222',
        },
        forest: {
          50: '#EEFDF2',
          100: '#D6CDBF',  // Sage
          200: '#B7AFA0',
          300: '#98917F',
          400: '#79735F',
          500: '#5A5541',
          600: '#474431',
          700: '#333222',
          800: '#222118',
          900: '#15140E',
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
        gold: {
          100: '#F2E9D8',
          200: '#E6D3B1',
          300: '#D9BD8B',
          400: '#CDA764',
          500: '#D4B48E',  // Primary gold
          600: '#BA955A',
          700: '#9E7B48',
          800: '#826036',
          900: '#664A28',
        },
        terracotta: {
          100: '#F5E6E0',
          200: '#EACCC2',
          300: '#E0B3A3',
          400: '#D59985',
          500: '#CB8066',
          600: '#BF6748',
          700: '#A3563B',
          800: '#884632',
          900: '#6C3729',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'texture-paper': "url('/images/textures/paper.jpg')",
        'texture-earth': "url('/images/textures/earth.jpg')",
        'texture-linen': "url('/images/textures/linen.jpg')",
      },
      animation: {
        'float': 'float 6s infinite ease-in-out',
        'pulse-slow': 'pulse 8s infinite alternate ease-in-out',
        'glow': 'glow 3s infinite alternate ease-in-out',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 15px 0 rgba(167, 127, 99, 0.15)',
        'sacred': '0 0 25px rgba(212, 180, 142, 0.3)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'sacred': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
      letterSpacing: {
        'widest': '.25em',
      },
    },
  },
  presets: [require('nativewind/preset')],
  plugins: [require('tailwindcss-animate'), require('tailwindcss-motion')],
}
