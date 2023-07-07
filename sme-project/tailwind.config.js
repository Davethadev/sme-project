/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005EF6",
        gray: "#939599",
        tin: "#F4F6F8",
        softblue: "#ECF4FF",
        green: "#009946",
        lightblue: "#96C9FF",
      },
      font: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        satoshi: "Satoshi",
      },
      fontSize: {
        sm: ["18px", "20px"],
        base: ["20px", "28px"],
        lg: ["24px", "28px"],
        xl: ["32px", "28px"],
      },
    },
  },
  plugins: [],
};
