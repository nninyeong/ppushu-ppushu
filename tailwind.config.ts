import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          300: '#2563eb',
          200: '#598EF3',
          100: '#D3E6FE'
        },
        pink: {
          300: '#d946ef',
          100: '#fae8ff'
        },
        dark: {
          500: '#1e293b',
          400: '#334155',
          300: '#475569',
          200: '#94a3b8',
          100: '#cbd5e1'
        }
      },
    },
  },
  plugins: [],
};
export default config;
