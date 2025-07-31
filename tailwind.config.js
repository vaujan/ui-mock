module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "avatar-user-squaresienna-hewitt-neutral-background":
          "var(--avatar-user-squaresienna-hewitt-neutral-background)",
        "gray-light-mode300": "var(--gray-light-mode300)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display-sm-semibold": "var(--display-sm-semibold-font-family)",
        "display-xs-semibold": "var(--display-xs-semibold-font-family)",
        "text-lg-semibold": "var(--text-lg-semibold-font-family)",
        "text-md-medium": "var(--text-md-medium-font-family)",
        "text-md-regular": "var(--text-md-regular-font-family)",
        "text-md-semibold": "var(--text-md-semibold-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-sm-semibold": "var(--text-sm-semibold-font-family)",
        "text-xl-semibold": "var(--text-xl-semibold-font-family)",
        "text-xs-bold": "var(--text-xs-bold-font-family)",
        "text-xs-medium": "var(--text-xs-medium-font-family)",
        "text-xs-regular": "var(--text-xs-regular-font-family)",
        "text-xs-semibold": "var(--text-xs-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "focus-rings-focus-ring": "var(--focus-rings-focus-ring)",
        "focus-rings-focus-ring-shadow-xs-skeuomorphic":
          "var(--focus-rings-focus-ring-shadow-xs-skeuomorphic)",
        "shadows-shadow-lg": "var(--shadows-shadow-lg)",
        "shadows-shadow-sm": "var(--shadows-shadow-sm)",
        "shadows-shadow-xs": "var(--shadows-shadow-xs)",
        "shadows-shadow-xs-skeuomorphic":
          "var(--shadows-shadow-xs-skeuomorphic)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
