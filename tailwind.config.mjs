const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Monument Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "oxe-xs": ["18px", { lineHeight: "25px" }],
        "oxe-sm": ["25px", { lineHeight: "34px" }],
        "oxe-md": ["30px", { lineHeight: "35px" }],
        "oxe-lg": ["45px", { lineHeight: "50px" }],
        "oxe-xxl": ["80px", { lineHeight: "90px" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
