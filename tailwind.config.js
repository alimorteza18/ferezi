module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }
    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }
    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // screens: {
    // sm: "480px",
    // md: "600px",
    // tablet: "768px",
    // lg: "1024px",
    // xl: "1280px",
    // "2xl": "1536px",
    // },

    colors: {
      validationError: {
        default: "#ee5353",
      },

      black: {
        text: "#344456",
        textSecondry: "#777",

        DEFAULT: "#000000",
        50: "#E6E6E6",
        100: "#D9D9D9",
        200: "#BFBFBF",
        300: "#A6A6A6",
        400: "#8C8C8C",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#262626",
        900: "#0D0D0D",
      },
      white: {
        DEFAULT: "#ffffff",
        text: "#fafafa",
        backGround: "#fafafa",
      },
      blue: {
        default: "#abf0d4",
        // 200: "#abf0d433",
        // 300: "#abf0d44D",
        // 400: "#abf0d466",
        // 500: "#abf0d480",
        // 600: "#abf0d499",
        // 700: "#abf0d4B3",
        // 800: "#abf0d4CC",
        // 900: "#abf0d4E6",
        50: "#F6FDFB",
        100: "#F2FDF8",
        200: "#E9FBF4",
        300: "#E1FAF0",
        400: "#D8F8EB",
        500: "#CFF7E7",
        600: "#C7F5E2",
        700: "#BEF3DE",
        800: "#BAF3DC",
        900: "#B1F1D7",
      },
      orange: {
        default: "#ffb900",
        // 200: "#ffb90033",
        // 300: "#ffb9004D",
        // 400: "#ffb90066",
        // 500: "#ffb90080",
        // 600: "#ffb90099",
        // 700: "#ffb900B3",
        // 800: "#ffb900CC",
        // 900: "#ffb900E6",
        50: "#FFF8E5",
        100: "#FFF5DB",
        200: "#FFEFC2",
        300: "#FFE8A8",
        400: "#FFE18F",
        500: "#FFDA75",
        600: "#FFD35C",
        700: "#FFCD42",
        800: "#FFC629",
        900: "#FFBF0F",
      },
      green: {
        default: "#87cb45",
        // 200: "#87cb4533",
        // 300: "#87cb454D",
        // 400: "#87cb4566",
        // 500: "#87cb4580",
        // 600: "#87cb4599",
        // 700: "#87cb45B3",
        // 800: "#87cb45CC",
        // 900: "#87cb45E6",
        50: "#F2F9EB",
        100: "#EDF7E3",
        200: "#E0F2CF",
        300: "#D6EDBF",
        400: "#C9E8AB",
        500: "#BDE297",
        600: "#B3DE87",
        700: "#A6D874",
        800: "#99D260",
        900: "#8FCE50",
        // 950: "#87CB45"
      },
      peachyPink: {
        default: "#ffa387",
        // 200: "#ffa38733",
        // 300: "#ffa3874D",
        // 400: "#ffa38766",
        // 500: "#ffa38780",
        // 600: "#ffa38799",
        // 700: "#ffa387B3",
        // 800: "#ffa387CC",
        // 900: "#ffa387E6",
        50: "#FFF7F5",
        100: "#FFEFEB",
        200: "#FFE8E0",
        300: "#FFE0D6",
        400: "#FFD4C7",
        500: "#FFCCBD",
        600: "#FFC4B3",
        700: "#FFB9A3",
        800: "#FFB199",
        900: "#FFA98F",
      },
      pink: {
        default: "#FFE7E0",
      },
    },
    fontFamily: {
      //   SFProText: ["SFProText"],
      YekanBakh: ["YekanBakh"],
      //   Nexa: ["Nexa"],
      //   HelveticaNeueLTPro:["HelveticaNeueLTPro"]
    },
    extend: {
      screens: {
        "fr-sm": "480px",
        "fr-md": "600px",
      },
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      // backgroundImage: {
      //   loginSm: "url('/src/assets/images/backgrounds/background-phone.webp')",
      //   loginMd: "url('/src/assets/images/backgrounds/background-tablet.webp')",
      //   loginSmLandscape:
      //     "url('/src/assets/images/backgrounds/background-phone-landscape.webp')",
      //   loginMdLandscape:
      //     "url('/src/assets/images/backgrounds/background-tablet-landscape.webp')",
      //   loginFormSm: "url('/src/assets/images/backgrounds/new-tray.png')",
      // },
      height: {
        footerMenu: "60px",
        header: "50px",
      },
      width: {
        mainWrapper: "600px",
      },
    },
    // element: {
    //   size: {
    //     footermenu: {
    //       height: "60px",
    //     },
    //   },
    // },
  },
};
