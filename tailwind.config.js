/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg-header-mobile.png')",
        hero_desktop: "url('/images/bg-header-desktop.png')",
      },
      colors: {
        "strong-Cyan": "hsl(171, 66%, 44%)",
        "light-Blue": "hsl(233, 100%, 69%)",
        "dark-Grayish-Blue": "hsl(210, 10%, 33%)",
        "Grayish-Blue": "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        body: ["Bai Jamjuree"],
      },
      screens: {
        df: "280px",
        sm: "375px",
        md: "768px",
        lg: "910px",
        xl: "1024px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
