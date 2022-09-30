/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        profileDrawing: "url('./src/routes/Components/Icons/ProfileDrawing.svelte')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
