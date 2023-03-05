/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {
          backgroundImage: theme => ({
            'ginger': "url('/src/assets/images/ginger-retouched.png')",
            'parfumeBlueAfter': "url('/src/assets/images/ParfumeBlue.png')",
            'limeAndRed': "url('/src/assets/images/Lime-and-Red-v2.png')",
            'Chanelretoched': "url('/src/assets/images/Chanelretoched.png')",
            'PortraitAfter': "url('/src/assets/images/PortraitAfter.jpg')",
            'bag': "url('/src/assets/images/Bag.jpeg')",
            'sasha': "url('/src/assets/images/SashaRetouchedFinal.png')"
          }),
          display: ["group-hover"]
        },
    },
    plugins: [],
}
