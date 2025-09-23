/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "600px", //custom breakpoint
        sx: "420px",
      },
    },
  },
  plugins: [typography],
};
