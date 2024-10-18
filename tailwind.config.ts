import type { Config } from "tailwindcss";
import { content, plugin } from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
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
  plugins: [plugin()],
};
export default config;
