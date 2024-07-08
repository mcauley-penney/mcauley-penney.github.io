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
      colors: {
        border: {
          DEFAULT: "#b38600",
          dark: "#697481",
        },
        background: {
          DEFAULT: "#fdf6e3",
          dark: "#1c2128",
        },
        foreground: {
          DEFAULT: "#002b36",
          dark: "#c2cdda",
        },
        muted: {
          DEFAULT: "#fbeecb",
          dark: "#2d333b",
          foreground: "#a47a0c",
          "dark-foreground": "#697481",
        },
        hover: {
          DEFAULT: "#fae7b3",
          dark: "#384049",
        },
        card: {
          DEFAULT: "#fbeecb",
          dark: "#2d333b",
          foreground: "#002b36",
          "dark-foreground": "#c2cdda",
        },
        input: {
          DEFAULT: "#b38600",
          dark: "#697481",
        },
        primary: {
          DEFAULT: "#fdf6e3",
          foreground: "#002b36",
          dark: "#1c2128",
          "dark-foreground": "#c2cdda",
        },
        secondary: {
          DEFAULT: "#fbeecb",
          foreground: "#a47a0c",
          dark: "#384049",
          "dark-foreground": "#697481",
        },
        accent: {
          DEFAULT: "#2e7d32",
          foreground: "#e2e7e8",
          dark: "#2e7d32",
          "dark-foreground": "#e2e7e8",
        },
        destructive: {
          DEFAULT: "#96838A",
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
