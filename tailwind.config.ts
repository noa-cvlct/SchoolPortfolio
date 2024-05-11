import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        landing: "calc(100vh - 2.5rem)",
        tile: "calc(100vh - 7rem)",
        "small-tile": "20vh",
      },
      gap: {
        gap: "2.5rem",
        "small-gap": "1rem",
      }
    },
  },
  plugins: [],
};
export default config;
