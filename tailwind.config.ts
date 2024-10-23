import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: '#B42AB5',
        customYellow: '#FDD400',
        customGreen: '#388A7C',
        customYellow1: '#FDD400',
        customPurple1: '#B42AB5',
      },
    },
  },
  plugins: [],
};
export default config;
