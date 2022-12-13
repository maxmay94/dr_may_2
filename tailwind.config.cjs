/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unna: ['Unna-bold', 'serif']
      },
      backgroundImage: {
        'happy-people-temp' : "url('src/images/happy_people_temp.jpeg')",
      }
    },
  },
  plugins: [],
}