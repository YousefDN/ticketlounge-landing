module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-modeneutralbg": "var(--dark-modeneutralbg)",
        "light-modeerrormain": "var(--light-modeerrormain)",
        "light-modeneutralwhite-bg": "var(--light-modeneutralwhite-bg)",
        "light-modesuccesslight": "var(--light-modesuccesslight)",
        "light-modetextbody": "var(--light-modetextbody)",
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
        "avatar-initials-medium": "var(--avatar-initials-medium-font-family)",
        "avatar-label-small": "var(--avatar-label-small-font-family)",
        "avatar-label-xsmall": "var(--avatar-label-xsmall-font-family)",
        "body-1": "var(--body-1-font-family)",
        "body-2": "var(--body-2-font-family)",
        "body-caption": "var(--body-caption-font-family)",
        "breadcrumb-breadcrumb-2": "var(--breadcrumb-breadcrumb-2-font-family)",
        "button-medium": "var(--button-medium-font-family)",
        "headings-1": "var(--headings-1-font-family)",
        "headings-2": "var(--headings-2-font-family)",
        "headings-3": "var(--headings-3-font-family)",
        "headings-4": "var(--headings-4-font-family)",
        "headings-6": "var(--headings-6-font-family)",
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
        "blur-style": "var(--blur-style)",
        "button-primary": "var(--button-primary)",
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
