/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {
          backgroundImage: theme => ({
            'ginger': "url('/src/assets/images/ginger-retouched.png')",
            'perfumeBlueAfter': "url('/src/assets/images/PerfumeBlue.png')",
            'limeAndRed': "url('/src/assets/images/Lime-and-Red-v2.png')",
            'Chanelretoched': "url('/src/assets/images/Chanelretoched.png')",
            'PortraitAfter': "url('/src/assets/images/PortraitAfter.jpg')",
            'bag': "url('/src/assets/images/Bag.jpeg')",
            'sasha': "url('/src/assets/images/SashaRetouched.png')",
            'detailsAfter': "url('/src/assets/images/DetailsAfter.jpg')",
            'Beauty': "url('/src/assets/images/BeautyAfter.jpg')",
            'Bege': "url('/src/assets/images/Bege.jpg')",
            'Stellary': "url('/src/assets/images/Stellary.jpg')"
          }),
          display: ["group-hover"]
        },
    },
    plugins: [],
}
