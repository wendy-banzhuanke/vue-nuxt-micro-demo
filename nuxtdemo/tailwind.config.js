const config = require('@ej/tailwind-config')
const Lodash = require('lodash')

const selfConfig = {
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: '#fafafa',
          lighter: '#f5f5f5',
          light: '#e4e4e4',
          default: '#ccc',
          dark: '#999',
          darker: '#666',
          darkest: '#333',
        },
        red: {
          lighter: '#ffe1e1',
          light: '#ffa5a5',
          default: '#ff6a6a',
        },
        orange: {
          lighter: '#ffe3cb',
          light: '#ffbf8a',
          default: '#eb8f43',
        },
        yellow: {
          lighter: '#ffedbb',
          light: '#ffdc7b',
          default: '#ffcc3f',
        },
        green: {
          lighter: '#d8ffec',
          light: '#8be0b6',
          default: '#4ec189',
        },
        blue: {
          lighter: '#e2ecff',
          light: '#9cbaf2',
          default: '#477de9',
        },
        purple: {
          lighter: '#ebdfff',
          light: '#be94ff',
          default: '#8e45ff',
        },
      },
      spacing: {
        xs: '5px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '50px',
      },
      fill: theme => theme('colors'),
      container: {
        center: true,
        padding: '50px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    ({addUtilities}) => {
      const newUtilities = {
        '.bg-theme-color': {
          background: '#477de9',
        },
        '.text-theme-color': {
          color: '#477de9',
        },
        '.border-theme-color': {
          borderColor: '#477de9',
        },
        '.fill-theme-color': {
          fill: '#477de9',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

selfConfig.theme.extend = Lodash.merge(config.theme, selfConfig.theme.extend)

module.exports = selfConfig
