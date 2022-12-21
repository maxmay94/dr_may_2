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
        'people-running' : "url('../images/people_running.jpeg')",
        'x-ray' : "url('../images/x-ray_film.jpeg')",
        'spine' : "url('../images/spine.jpeg')"
      }
    },
  },
  plugins: [],
}