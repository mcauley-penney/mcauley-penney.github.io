import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        border: {
          DEFAULT: "#AFB3B3",
          dark: "#384049",
        },
        background: {
          DEFAULT: "#f2f7f7",
          dark: "#1c2128",
        },
        foreground: {
          DEFAULT: "#0e1111",
          dark: "#e2e7e8",
        },
        muted: {
          DEFAULT: "#e2eded",
          dark: "#2d333b",
          foreground: "#67b5fc",
          "dark-foreground": "#697481",
        },
        hover: {
          DEFAULT: "#67b5fc",
          dark: "#384049",
        },
        card: {
          DEFAULT: "#F5F9F9",
          dark: "#191d24",
          foreground: "#0e1111",
          "dark-foreground": "#c2cdda",
        },
        input: {
          DEFAULT: "#67b5fc",
          dark: "#2e7d32",
        },
        primary: {
          DEFAULT: "#fdf6e3",
          foreground: "#0e1111",
          dark: "#1c2128",
          "dark-foreground": "#c2cdda",
        },
        secondary: {
          DEFAULT: "#e2e7e8",
          foreground: "#67b5fc",
          dark: "#384049",
          "dark-foreground": "#697481",
        },
        accent: {
          DEFAULT: "#2e7d32",
          foreground: "#c9a3a4",
          dark: "#2e7d32",
          "dark-foreground": "#e2b05c",
        },
        destructive: {
          DEFAULT: "#96838a",
          foreground: "#e2e7e8",
          dark: "#d32f2f",
          "dark-foreground": "#e2e7e8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
