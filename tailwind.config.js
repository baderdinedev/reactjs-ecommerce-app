/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      // Define custom colors for the Blush by Ghada Chaka brand
      colors: {
        blushPink: "#F5E1E5", // Primary blush pink
        roseGold: "#E8B4B8", // Rose gold for CTAs and accents
        redAccent: "#D32F2F", // Bold red for accents (inspired by the roses)
        ivory: "#F8F5F0", // Neutral ivory
        charcoal: "#333333", // Dark charcoal for text and backgrounds
      },
      // Define custom fonts
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"], // For headings
        montserrat: ["Montserrat", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
};
