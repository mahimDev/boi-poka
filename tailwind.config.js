/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "soft-gradient":
          "linear-gradient(to right, rgba(15, 155, 15, 0.48), rgba(0, 0, 0, 0.37))",
      },
    },
  },
  plugins: [],
};
