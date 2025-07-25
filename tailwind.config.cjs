/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{html,js,ts,tsx}"],
    theme: {
      extend: {}
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [{
        foodTheme: {
          "primary": "#f59e0b",
          "secondary": "#f97316",
          "accent": "#d97706",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
        }
      }],
    }
  };
  