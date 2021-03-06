const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
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
      spacing: {
        "1/1-4gap": "calc(100% - 1rem)",
        "1/2-4gap": "calc(50% - 1rem)",
        "1/3-4gap": "calc(33.33333% - 1rem)",
        "1/4-4gap": "calc(25% - 1rem)",
        "1/5-4gap": "calc(20% - 1rem)",
        "1/6-4gap": "calc(16.66667% - 1rem)",
        "1/12-4gap": "calc(8.33333% - 1rem)",
        "1/1-8gap": "calc(100% - 2rem)",
        "1/2-8gap": "calc(50% - 2rem)",
        "1/3-8gap": "calc(33.33333% - 2rem)",
        "1/4-8gap": "calc(25% - 2rem)",
        "1/5-8gap": "calc(20% - 2rem)",
        "1/6-8gap": "calc(16.66667% - 2rem)",
        "1/12-8gap": "calc(8.33333% - 2rem)",
      },
      scale: {
        102: "1.02",
      },
      screens: {
        _hover: { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
