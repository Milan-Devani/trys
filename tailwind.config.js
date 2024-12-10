/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        NetRed: '#E50914',
      },
      fontFamily: {
        NetflixSansBold: ['NetflixSans-Bold', 'sans-serif'],
        NetflixSansLight: ['NetflixSans-Light', 'sans-serif'],
        NetflixSansMedium: ['NetflixSans-Medium', 'sans-serif'],
        NetflixSans: ['NetflixSans', 'sans-serif'],
        HelveticaNeue:['HelveticaNeue' , 'sans-serif'],
        SegoeUIRegular:['Segoe-UI-Regular' , 'sans-serif'],
        SegoeUIBold:['Segoe-UI-Bold' , 'sans-serif'],
        SegoeUIItalic:['Segoe-UI-Italic' , 'sans-serif'],
        SegoeUIBoldItalic:['Segoe-UI-Italic' , 'sans-serif'],
        InterRegular:['Inter-Regular' , 'sans-serif'],
      },
      backgroundImage: {
        'Features-gradient': 'linear-gradient(149deg, #192247 0%, #210e17 99.08%)',
      },
    },
  },
  plugins: [],
}
