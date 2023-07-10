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
        grey: "#F9FAFB",
        darkgrey: "#6B7280",
        grey20: "#E5E7EB",
        grey40: "#9CA3AF",
        darkgray: "#AFAFB6",
        dark: "#12121A",
        grey60: "#525252",
        pastel: "#F0F2FE",
        pastel2: "#F9F9FB",
        black: "#02060E",
        text80: "#323232",
        gray20: "#9E9E9E",
        neutral: "#FCFCFC",
      },
      font: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        satoshi: "Satoshi",
        inter: '"Inter", sans-serif',
        lato: "'Lato', sans-serif",
        open: "'Open Sans', sans-serif",
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
