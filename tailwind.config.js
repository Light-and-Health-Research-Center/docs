module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        barbiePink: {
          100: "#DC298D",
          80: "#E354A4",
          60: "#EA7FBB",
        },
        vividCerulean: {
          100: "#06ABEB",
          80: "#38BCEF",
          60: "#6ACDF3",
        },
        stPatricksBlue: {
          100: "#212070",
          80: "#4D4D8D",
          60: "#7A79A9",
        },
        cetaceanBlue: {
          100: "#00002D",
          80: "#333357",
          60: "#666681",
        },
        white: {
          100: "#FFFFFF",
          off: "#F6F8FA",
        },
        black: {
          100: "#000000",
          90: "#1A1A1A",
          85: "#222222",
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
          10: "#E6E6E6",
        },
        programs: {
          plant: "#51DB24",
          energy: "#24ACDB",
          human: "#AE24DB",
          transportation: "#DB5324",
        },
      },
      dropShadow: {
        softerBlur: "0 0 5px rgba(0, 0, 0, 0.15)",
        softBlur: "0 0 10px rgba(0, 0, 0, 0.15)",
        popFromBL: "-3px 3px 3px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
