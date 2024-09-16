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
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'beige': '#f5f5dc',
      },
    },
  },
  plugins: [],
};
export default config;
