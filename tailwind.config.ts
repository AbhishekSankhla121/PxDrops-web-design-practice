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
        "navBar-bg-color":"#200D40",
        "nav-text-color":"#C7C8C9",
        "body-bg-color":"#200D40",
        "white-text":"#FFFFFF"
      },
      screens: {
        'sm-small': '320px',
        'sm-medium': '375px',
        'sm-large': '425px',
        md: '769px',
        "md-meduim": "1000px",
        xl: '1024px',
        '2xl': '1440px',
        '4xl': '2560px',
      },
      fontFamily:{
        "lexend-deca":["'Lexend Deca'","sans-serif"],
        "Inter": ["'Inter'", "sans-serif"],
        "Beatrice":["'Beatrice'", "sans-serif"],
        "Epilogue":["'Epilogue'","sans-serif"]
      },
     
    },
  },
  plugins: [],
};

export default config;
