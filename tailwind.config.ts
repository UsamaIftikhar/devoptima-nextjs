import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A0811',
        'text-primary': '#EFF1F6',
        'text-secondary': '#BDC4D1',
        'hover-bg': '#243BB9',
        'hover-border': '#3F57DA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        title: ['Aeonik', 'sans-serif'],
      },
      maxWidth: {
        container: '1472px',
        card: '380px',
        section: '1220px',
      },
    },
  },
  plugins: [],
} satisfies Config;
