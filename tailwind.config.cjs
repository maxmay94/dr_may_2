/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      backgroundImage: {
        'spine' : "url('../images/spine.jpeg')",
        'mountain-top' : "url('../images/mountain_top.jpeg')"
      }
    },
  },
  plugins: [],
}