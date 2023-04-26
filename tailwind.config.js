const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Source_Sans_Pro)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".shadow-custom": {
          border: "1px solid rgba(29, 161, 242, 0.2)",
          "box-shadow": "0px 15px 60px rgba(29, 161, 242, 0.15)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
