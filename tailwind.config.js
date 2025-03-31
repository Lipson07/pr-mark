module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [  require('postcss-flexbugs-fixes'),
    require('tailwindcss'),
    require('autoprefixer')],
}