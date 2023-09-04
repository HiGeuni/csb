/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      accent: '#05174E',
      primary: '#444c74',
      secondary: '#A9AABC',
      brown1: '#3B2C00',
      brown2: '#6C5A2A',
      gray: '#dee2e6'
    },
    extend: {
      keyframes: {
        serviceAnimation: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(var(--translate-x, 0), var(--translate-y, 0))',
          },
        },
        shiftBottom: {
          from: {
            bottom: '64px',
          },
          to: {
            bottom: '68px',
          },
        },
        blackToGray : {
          '0%': {
            color: '#000000',
          },
          '100%': {
            color: '#6b7280',
          },
        }
      },
      animation: {
        'service-animation': 'serviceAnimation 1s ease-in-out',
        'shift-bottom': 'shiftBottom 0.3s ease-in-out forwards',
        'black-to-gray': 'blackToGray 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
