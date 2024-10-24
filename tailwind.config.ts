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
        customblue: '#344AC1',
        customsec : '#E7E9F8',
        gradient1 : '#344AC1',
        gradient2 : '#B42AB5',
        button1 : '#FDD40091',
      },
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1280px",
        ["2xl"] :  "1530px",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        geistSans: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        'custom': '0.25em',
      },
    },
  },
  plugins: [],
};
export default config;
