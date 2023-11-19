/** @type {import('tailwindcss').Config} */
export const content = [
  './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue,png}',
];
export const darkMode = 'class';
export const theme = {
  extend: {},
};
export const variants = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require("daisyui"),
];
export const daisyui = {
  themes: ["dark"],
};

