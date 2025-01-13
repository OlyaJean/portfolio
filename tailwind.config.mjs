/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      lightHover: '#fafcff',
      redHover:'#fad7e5',
      darkHover: '2a004a',
      darkTheme: '#11001F'
      },
      fontFamily:{
        Outfit: ["Outfit", 'sans-serif'],
        Ovo:['Ovo','sans-serif']
      },
      boxShadow:{
        'white': '4px 4px 0 #fff',
        'black': '4px 4px 0 #000',
        'red':'4px 4px 0 #cf2929'
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
