const _ = require("lodash")
const plugin = require("tailwindcss/plugin")
const { theme } = require("twin.macro")

module.exports = {
  important: true,
  purge: {
    content: ["./pages/**/*.js", "./components/**/*.js", "./utils/**/*.js", "./stories/**/*.js"],
    options: {
      safelist: [/__next$/],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: false
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "rgba(255,255,255, 0)",
      current: "currentColor",
      black: "#1b1b1b",
      white: "#fff",
      primary: {
        light: "#39008c",
        DEFAULT: "#39008c",
        dark: "#39008c"
      },
      secondary: {
        light: "#1b1b1b",
        DEFAULT: "#1b1b1b",
        dark: "#1b1b1b"
      },
      cta: {
        light: "#15F090",
        DEFAULT: "#15F090",
        dark: "#15F090"
      },
      danger: {
        light: "#ff3333",
        DEFAULT: "#ff3333",
        dark: "#ff3333"
      },
      warning: {
        light: "#ff8b00",
        DEFAULT: "#ff8b00",
        dark: "#ff8b00"
      },
      gray: {
        darkest: "#ebe8ef",
        dark: "#ebe8ef",
        DEFAULT: "#ebe8ef",
        light: "#ebe8ef",
        lightest: "#ebe8ef"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1320px",
      "sm-down": { max: "639px" },
      "md-down": { max: "767px" },
      "lg-down": { max: "1023px" },
      "xl-down": { max: "1199px" },
      "2xl-down": { max: "1319px" }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "8px",
        sm: "16px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px"
      }
    },
    fontFamily: {
      base: ["Roobert", "Arial", "sans-serif"],
      body: ["Roobert", "Arial", "sans-serif"]
    },
    fontSize: {
      0: 0,
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px"
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    headers: {
      h1: "56px",
      h2: "40px",
      h3: "32px",
      h4: "24px",
      h5: "18px",
      h6: "16px"
    },
    spacing: {
      0: "0",
      0.5: "2px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "40px",
      9: "48px",
      10: "56px",
      11: "64px",
      12: "72px",
      13: "80px",
      14: "88px",
      15: "96px",
      16: "104px",
      sm: "40px",
      md: "48px",
      lg: "56px",
      xl: "64px"
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.333333%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      none: "none"
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.333333%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      none: "none"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.333333%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh"
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.333333%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh"
    },
    icons: {
      xs: "16px",
      sm: "20px",
      base: "24px",
      lg: "32px",
      xl: "40px"
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      100: 100,
      1000: 1000,
      auto: "auto"
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px"
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "50%",
      large: "12px"
    },
    outline: {
      none: "none"
    },
    opacity: {
      0: 0,
      10: 0.1,
      15: 0.15,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      35: 0.35,
      40: 0.4,
      45: 0.45,
      50: 0.5,
      55: 0.55,
      60: 0.6,
      65: 0.65,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      85: 0.85,
      90: 0.9,
      95: 0.95,
      100: 1
    },
    textColor: theme => theme("colors"),
    textOpacity: theme => theme("opacity"),
    placeholderColor: theme => theme("colors"),
    placeholderOpacity: theme => theme("opacity"),
    fill: theme => theme("colors"),
    extend: {
      lineHeight: {
        0: 0
      },
      placeholderColor: {
        transparent: "transparent"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active", "disabled"],
      borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active", "disabled"],
      cursor: ["hover", "focus", "disabled"],
      outline: ["responsive", "focus-within", "focus", "hover", "active"],
      textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active", "disabled"]
    }
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const iconSizes = _.map(theme("icons"), (value, key) => {
        return {
          [`.${e(`icon-${key}`)}`]: {
            [`& > *`]: {
              fontSize: value,
              lineHeight: 1,
              display: "inline-block",
              verticalAlign: "middle",
              height: "1em",
              width: "auto",
              fill: "currentColor",
              color: "currentColor"
            }
          }
        }
      })

      addUtilities(iconSizes)
    }),
    plugin(function ({ addUtilities, theme, e }) {
      const customHeaders = _.map(theme("headers"), (value, key) => {
        return {
          [`.${e(`${key}`)}`]: {
            fontSize: value
          }
        }
      })

      addUtilities(customHeaders)
    }),
    plugin(function ({ addBase, theme, e }) {
      const md = theme("screens.md")
      const mdDown = theme("screens.md-down.max")
      const smDown = theme("screens.sm-down.max")
      const fontSemibold = theme("fontWeight.semibold")

      addBase({
        "html, body": {
          minHeight: "100vh",
          minWidth: "320px",
          height: "100%",
          fill: "currentColor"
        },
        body: {
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0
        },
        "h1, h2, h3, h4, h5, h6": { fontWeight: fontSemibold },
        "h2, h3, h4, h5, h6": { lineHeight: 1.5 },
        h1: {
          lineHeight: 1.25,
          [`@media (min-width: ${md})`]: { fontSize: theme("headers.h1") },
          [`@media (max-width: ${smDown})`]: { fontSize: "40px" },
          [`@media (max-width: ${mdDown})`]: { fontSize: "48px" }
        },
        h2: {
          [`@media (min-width: ${md})`]: { fontSize: theme("headers.h2") },
          [`@media (max-width: ${smDown})`]: { fontSize: "24px" },
          [`@media (max-width: ${mdDown})`]: { fontSize: "32px" }
        },
        h3: {
          [`@media (min-width: ${md})`]: { fontSize: theme("headers.h3") },
          [`@media (max-width: ${smDown})`]: { fontSize: "20px" },
          [`@media (max-width: ${mdDown})`]: { fontSize: "28px" }
        },
        h4: {
          [`@media (min-width: ${md})`]: { fontSize: theme("headers.h4") },
          [`@media (max-width: ${smDown})`]: { fontSize: "22px" },
          [`@media (max-width: ${mdDown})`]: { fontSize: "24px" }
        },
        h5: {
          [`@media (min-width: ${md})`]: { fontSize: theme("headers.h5") },
          [`@media (max-width: ${smDown})`]: { fontSize: "18px" },
          [`@media (max-width: ${mdDown})`]: { fontSize: "20px" }
        },
        h6: {
          fontSize: theme("fontSize.base")
        },
        a: {
          [`&, &:visited, &:focus`]: {
            color: theme("colors.primary.DEFAULT"),
            textDecoration: "none",
            outline: "none"
          },
          [`&:hover, &:active`]: {
            color: theme("colors.primary.DEFAULT"),
            textDecoration: "none",
            outline: "none"
          }
        },
        "#__next": {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          flexShrink: 0
        }
      })
    })
  ]
}
