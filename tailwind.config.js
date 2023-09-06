/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      brands: {
        brand1: "#4529E6",
        brand2: "#5126EA",
        brand3: "#B0A6F0",
        brand4: "#EDEAFD",
      },
      grey: {
        grey0: "#0B0D0D",
        grey1: "#212529",
        grey2: "#495057",
        grey3: "#868E96",
        grey4: "#ADB5BD",
        grey5: "#CED4DA",
        grey6: "#DEE2E6",
        grey7: "#E9ECEF",
        grey8: "#F1F3F5",
        grey9: "#F8F9FA",
        grey10: "#FDFDFD",
        whiteFixed: "#FFFFFF",
      },
      feedBack: {
        alert: {
          alert1: "#CD2B31",
          alert2: "#FDD8D8",
          alert3: "#FFE5E5",
        },
        sucess: {
          sucess1: "#18794E",
          sucess2: "#CCEBD7",
          sucess3: "#DDF3E4",
        },
      },
      random: {
        random1: "#E34D8C",
        random2: "#C04277",
        random3: "#7D2A4D",
        random4: "#7000FF",
        random5: "#6200E3",
        random6: "#36007D",
        random7: "#349974",
        random8: "#2A7D5F",
        random9: "#153D2E",
        random10: "#6100FF",
        random11: "#5700E3",
        random12: "#30007D",
      },
    },
    typography: {
      heading: {
        heading1: {
          fontSize: "44px",
          fontWeight: "600",
          lineHeight: "56px",
        },
        heading2: {
          fontSize: "36px",
          fontWeight: "600",
          lineHeight: "45px",
        },
        heading3_600: {
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "40px",
        },
        heading3_500: {
          fontSize: "32px",
          fontWeight: "500",
          lineHeight: "40px",
        },
        heading4_600: {
          fontSize: "28px",
          fontWeight: "600",
          lineHeight: "35px",
        },
        heading4_500: {
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "35px",
        },
        heading5_600: {
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "30px",
        },
        heading5_500: {
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "30px",
        },
        heading6_600: {
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "25px",
        },
        heading6_500: {
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "25px",
        },
        heading7_600: {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "20px",
        },
        heading7_500: {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "20px",
        },
      },
      body: {
        body1_400: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "28px",
        },
        body1_600: {
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "28px",
        },
        body2_400: {
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "24px",
        },
        body2_500: {
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "24px",
        },
        button_big_text: {
          fontSize: "16px",
          fontWeight: "600",
        },
        button_medium_text: {
          fontSize: "14px",
          fontWeight: "600",
        },
        input_placeholder: {
          fontSize: "16px",
          fontWeight: "400",
        },
        input_label: {
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
  },
  plugins: [],
}
