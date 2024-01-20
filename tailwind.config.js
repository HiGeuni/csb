/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      brown1: '#3B2C00',
      brown2: '#6C5A2A',
      gray: '#dee2e6',
      primary: '#c6b9bc',
      secondary: '#dddfe3',
      accent: '#05174E',
      text: '#101114',
      background: '#f7f7f8',
      static: 'rgba(225, 225, 225, 0.5)',
      static1: 'rgba(225,225,225,0.2)',
      static2: '#0f0f0f',
      static4: 'rgba(255,255,255,0.2)',
      static3: 'rgb(255, 255, 255)',
      static5: 'rgb(24, 172, 122)',
      static6: 'rgba(0,0,0,0.05)',
      static7: 'rgba(0,0,0,0.1)',
      static8: 'rgba(0,0,00,0.05)',
      static9: 'rgba(0,0,0,0.3)',
      static10: 'rgba(255, 255, 255)',
    },
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
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
        headerColorChange: {
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
        moveUp: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
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
};
