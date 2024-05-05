/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        wizardBlue: "#1587b1",
        wizardDark: "#102736",
        wizardLight: "#ffbf7a",
      },
    },
  },
  plugins: [require("daisyui"), addDynamicIconSelectors()],
};
