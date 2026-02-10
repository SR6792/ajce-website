/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        background: {
          dark: '#0f172a',    // slate-900
          light: '#1e293b',   // slate-800
        },
        text: {
          main: '#f8fafc',    // slate-50
          muted: '#94a3b8',   // slate-400
        },
        accent: '#fbbf24',    // amber-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}
