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
        'x-ray-temp' : "url('src/images/x-ray_film_temp.jpeg')",
      }
    },
  },
  plugins: [],
}