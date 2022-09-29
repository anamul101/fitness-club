/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#f2b6b0",
          
 "secondary": "#e0c6ff",
          
 "accent": "#e8a0a1",
          
 "neutral": "#151B23",
          
 "base-100": "#FFFFFF",
          
 "info": "#2CC8E8",
          
 "success": "#1DA571",
          
 "warning": "#DF9A07",
          
 "error": "#F54266",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
