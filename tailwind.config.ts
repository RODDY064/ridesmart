import type { Config } from "tailwindcss";

export default {
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
        dark_green:"#0D2736",
        lime_green:"#3BDD10",
      },
      fontFamily: {
        "lato": ["var(--font-lato)", "Lato", "sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
} satisfies Config;
