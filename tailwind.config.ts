import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        carbon: {
          900: "#0a0a0a",
          800: "#121212",
          700: "#1a1a1a",
          600: "#242424",
          500: "#2e2e2e",
        },
        neon: {
          blue: "#e5e5e5",
          purple: "#a3a3a3",
          pink: "#737373",
        },
        gold: {
          light: "#ffffff",
          DEFAULT: "#e5e5e5",
          dark: "#a3a3a3",
          darker: "#737373",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(200, 200, 200, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-neon":
          "linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #a3a3a3 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #ffffff 0%, #e5e5e5 30%, #a3a3a3 60%, #737373 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
