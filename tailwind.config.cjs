/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue,png}']

export const darkMode = 'class'

export const theme = {
  extend: {
    colors: {
      gilded:  '#C9b16C',
      forged: '#A1A6A8',
      priceless: '#36BCE9',
    },
  },
  contianer: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
    }
  },
}

export const variants = {
  extend: {}
}

export const plugins = [
  // eslint-disable-next-line no-undef
  require('daisyui')
]

export const daisyui = {
  themes: ['dark']
}

