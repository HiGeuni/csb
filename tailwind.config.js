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
      gray: '#dee2e6',
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
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
        headerColorChange : {
          '0%': {
            color: '#041444',
          },
          '100%': {
            color: '#444c74',
          },
        },
        headerHeightChange: {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: '240px',
          },
        },
        reverseHeaderHeightChange: {
          '0%': {
            height: '240px',
          },
          '100%': {
            height: '0px',
          },
        },
        moveUp : {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          }
        }
      },
      animation: {
        'service-animation': 'serviceAnimation 1s ease-in-out',
        'shift-bottom': 'shiftBottom 0.3s ease-in-out forwards',
        'black-to-gray': 'blackToGray 0.3s ease-in-out forwards',
        'header-animation': 'headerColorChange 0.3s ease-in-out forwards',
        'header-height': 'headerHeightChange 0.15s ease-in-out forwards',
        'reverse-header-height': 'reverseHeaderHeightChange 0.15s ease-in-out forwards',
        'move-up': 'moveUp 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
