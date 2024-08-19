/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url(./assets/images/webp/hero-bg.webp)",
        "contact": "url(./assets/images/webp/contact-bg.webp)",
         "footer": "url(./assets/images/webp/footer-cloud.webp)",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        ubuntu:["Ubuntu", "sans-serif"]
      },
      fontSize: {
        "custom-2xl": "28px",
        "custom-3xl": "34px",
        "custom-4xl": "45px",
        "custom-6xl":"65px"
      },
       container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      backgroundSize: {
         full:"100% 100%"
       },
      lineHeight: {
        "66": "66%",
        "116": "116%",
        "121": "121%",
        "126": "126%",
        "130": "130%",
        "146": "146%",
        "150": "150%",
        "155": "155%",
        "160":"160%",
      },
      colors: {
        "dark-blue": "#1B2024",
        "light-grey": "#636A78",
        "light-border":"#01B3F8",
        "black-blue": "#0F2338",
        "sky-blue": "#55C6F0",
        "sky": "#1E96EA",
        "light-sky": "#EBFBFF",
        "circle-blue": "#2194E8",
        "light-grey2": "#B2AEAF",
        "light-white": "#FBFEFE",
        "grey-text":"#707283"
      }
    },
  },
  plugins: [],
}