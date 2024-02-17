/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {
        "oxe-sm": ["25px", { lineHeight: "34px" }],
        "oxe-md": ["30px", { lineHeight: "35px" }],
      },
    },
  },
  plugins: [],
};
