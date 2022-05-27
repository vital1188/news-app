module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#000000",
      primary: "#FFFDFB",
      secondary: "#D6E3E4",
      danger: " #AEDDFB",
      lightYellow: " #9bc4d9",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
