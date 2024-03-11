/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050921",

        brand_black: "#111432",
        brand_blue: "#09a9ec",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // Custom screen size example
        // custom: "1440px", // Adds a 'custom' breakpoint
        // Example to override an existing size
        sm: "760px", // Overrides the default 'xl' breakpoint
      },
    },
  },
  plugins: [],
};
