/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {
          backgroundImage: theme => ({
            'dummy-image': "url('/src/assets/images/profile-image.png')"
          }),
          display: ["group-hover"]
        },
    },
    plugins: [],
}
