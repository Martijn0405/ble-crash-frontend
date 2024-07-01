module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "380px",
      sm: "500px",
      md: "700px",
      lg: "900px",
      xl: "1240px",
      "2xl": "1500px",
      "3xl": "1600px",
      "4xl": "1840px"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
        close: "close .2s ease-in-out",
        hide: "hide .2s ease-in-out",
        open: "open .2s ease-in-out",
        show: "show .2s ease-in-out",
        wave: "wave 2.5s ease-in-out infinite"
      },
      borderRadius: {
        none: "0px",
        1: "0.0625rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        full: "9999rem"
      },
      borderWidth: {
        none: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px"
      },
      boxShadow: {
        sm: "0px 10px 50px rgba(0, 0, 0, 0.03)"
      },
      colors: {
        transparent: "transparent",
        black: {
          DEFAULT: "var(--color-black)",
          5: "var(--color-black-5)",
          10: "var(--color-black-10)",
          20: "var(--color-black-20)",
          40: "var(--color-black-40)",
          60: "var(--color-black-60)",
          80: "var(--color-black-80)"
        },
        white: {
          DEFAULT: "var(--color-white)",
          5: "var(--color-white-5)",
          10: "var(--color-white-10)",
          20: "var(--color-white-20)",
          40: "var(--color-white-40)",
          60: "var(--color-white-60)",
          80: "var(--color-white-80)"
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          2: "var(--color-primary-2)",
          4: "var(--color-primary-4)",
          5: "var(--color-primary-5)",
          10: "var(--color-primary-10)",
          20: "var(--color-primary-20)",
          40: "var(--color-primary-40)",
          60: "var(--color-primary-60)",
          80: "var(--color-primary-80)",
          dark: {
            DEFAULT: "var(--color-primary-dark)",
            10: "var(--color-primary-dark-10)",
            20: "var(--color-primary-dark-20)",
            40: "var(--color-primary-dark-40)",
            60: "var(--color-primary-dark-60)",
            80: "var(--color-primary-dark-80)"
          }
        },
        green: {
          DEFAULT: "var(--color-green)",
          2: "var(--color-green-2)",
          4: "var(--color-green-4)",
          5: "var(--color-green-5)",
          10: "var(--color-green-10)",
          20: "var(--color-green-20)",
          40: "var(--color-green-40)",
          60: "var(--color-green-60)",
          80: "var(--color-green-80)"
        },
        orange: {
          DEFAULT: "var(--color-orange)",
          2: "var(--color-orange-2)",
          4: "var(--color-orange-4)",
          5: "var(--color-orange-5)",
          10: "var(--color-orange-10)",
          20: "var(--color-orange-20)",
          40: "var(--color-orange-40)",
          60: "var(--color-orange-60)",
          80: "var(--color-orange-80)"
        },
        red: {
          DEFAULT: "var(--color-red)",
          2: "var(--color-red-2)",
          4: "var(--color-red-4)",
          5: "var(--color-red-5)",
          10: "var(--color-red-10)",
          20: "var(--color-red-20)",
          40: "var(--color-red-40)",
          60: "var(--color-red-60)",
          80: "var(--color-red-80)"
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
          2: "var(--color-yellow-2)",
          4: "var(--color-yellow-4)",
          5: "var(--color-yellow-5)",
          10: "var(--color-yellow-10)",
          20: "var(--color-yellow-20)",
          40: "var(--color-yellow-40)",
          60: "var(--color-yellow-60)",
          80: "var(--color-yellow-80)"
        },
        toast: {
          error: "var(--toastify-color-error)",
          error2: "var(--toastify-color-error2)",
          error3: "var(--toastify-color-error3)",
          info: "var(--toastify-color-info)",
          info2: "var(--toastify-color-info2)",
          info3: "var(--toastify-color-info3)",
          success: "var(--toastify-color-success)",
          success2: "var(--toastify-color-success2)",
          success3: "var(--toastify-color-success3)",
          warning: "var(--toastify-color-warning)",
          warning2: "var(--toastify-color-warning2)",
          warning3: "var(--toastify-color-warning3)"
        }
      },
      fontSize: {
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        180: "11.25rem"
      },
      maxWidth: {
        100: "100px"
      },
      ringWidth: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem"
      },
      spacing: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        70: "4.375rem",
        72: "4.5rem",
        74: "4.625rem",
        80: "5rem",
        84: "5.25rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        102: "6.375rem",
        104: "6.5rem",
        120: "7.5rem",
        128: "8rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        400: "25rem",
        450: "28.125rem",
        520: "32.5rem"
      },
      keyframes: {
        close: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" }
        },
        hide: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        open: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        wave: {
          "0%": { height: "8px" },
          "50%": { height: "80px" },
          "100%": { height: "8px" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
}
