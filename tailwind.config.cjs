/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        ocean: "url('./routes/waves.jpg')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
