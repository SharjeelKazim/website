/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AD343E',
        light: '#2C2F24',
        darkGray:'#474747',
        lightGrey:'#414536',
        greyColor:'#F9F9F7',
        greyy:'#ADB29E',
        pileGrey:'#DBDFD0',
        lightDesaturatedGreen:'#DBDFD0 ',
        desaturatedBlueGray:'#495460 ',
        arcineGrey:'#737865',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmSans: ['"DM Sans"', 'sans-serif'], // Add the Playfair Display font
      },
    },
  },
  plugins: [],
};
