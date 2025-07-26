/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#4CAF50",
        accent: "#FF9800",
        background: "#f5f5f5",
        surface: "#ffffff",
        text: "#333333",
        textSecondary: "#666666",
      },
    },
  },
  plugins: [],
};
