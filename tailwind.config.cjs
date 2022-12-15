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
        'happy-people-temp' : "url('../images/happy_people_temp.jpeg')",
        'jumping-woman' : "url('../images/jumping_woman.jpeg')",
        'people-running' : "url('../images/people_running.jpeg')",
        'x-ray-temp' : "url('../images/x-ray_film_temp.jpeg')",
      }
    },
  },
  plugins: [],
}