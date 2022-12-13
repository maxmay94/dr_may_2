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
        'happy-people-temp' : "url('src/assets/happy_people_temp.jpeg')",
        'x-ray-temp' : "url('src/assets/x-ray_film_temp.jpeg')",
      }
    },
  },
  plugins: [],
}