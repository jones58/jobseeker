/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwind-classes-sorter"],
};
