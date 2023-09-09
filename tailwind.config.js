/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#01329C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
