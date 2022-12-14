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
        'happy-people-temp' : "url('dist/assets/happy_people_temp.jpeg')",
        'x-ray-temp' : "url('dist/assets/x-ray_film_temp.jpeg')",
      }
    },
  },
  plugins: [],
}