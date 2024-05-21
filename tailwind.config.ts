import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "vector": "url('/vector.svg')",
      },
      colors:{
        customTeal:{
          default:'#027A8B',
          dark:'#004C56',
          semidark: '#05616D',
          medium: '#226E79'
        },
        customBlue:{
          default: '#1d4ed8',
          dark:'#1e40af',
          semidark: '#0369a1',
          medium: '#2563eb'
        }
      },
    },
  },
  plugins: [],
};

export default config;