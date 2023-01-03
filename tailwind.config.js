/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans-serif"],
        qwitch: ["Qwitcher Grypen", "cursive"],
       },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
