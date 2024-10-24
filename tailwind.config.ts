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
        billee: {
          background: {
            primary: "#F2F2F2",
            secondary: "#FFFFFF",
          },
          labels: {
            primary: "#000000",
          },
          colors: {
            red: "#FF3B30",
            blue: "#007AFF",
            green: "#BFF205",
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
