import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      fontSize: {
        10: "0.625rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        44: "2.75rem",
        48: "3rem",
        56: "3.5rem",
        60: "3.75rem",
      },
      colors: {
        mercury: {
          30: "#FAFAFA",
          70: "#F4F4F5",
          100: "#E6E6E6",
          200: "#DFDFDF",
          300: "#C8C8C8",
          400: "#ADADAD",
          600: "#888888",
          700: "#7B7B7B",
          900: "#545454",
          950: "#363636",
        },
        black: {
          999: "#000000",
        },
        yellow: {
          10: "#FC0",
        },
      },
      boxShadow: {
        1: "0px 0px 20px 0px rgba(0, 0, 0, 0.01)",
        2: "0px 2.4px 6.4px 0px rgba(0, 0, 0, 0.02), 0px 2.4px 20px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
