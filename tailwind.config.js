/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        VeryLightGrayishBlue: "hsl(240, 78%, 98%)",
        LightGrayishBlue: "hsl(234, 14%, 74%)",
        GrayishBlue: "hsl(233, 13%, 49%)",
        DarkGrayishBlue: "hsl(232, 13%, 33%)",
        gradientLight: "hsl(236, 72%, 79%)",
        gradientDark: "hsl(237, 63%, 64%)",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
