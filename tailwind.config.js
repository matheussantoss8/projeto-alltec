/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  backdropBlur: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  aspectRatio: {
    md: "3/2",
  },
};
export const plugins = [];
