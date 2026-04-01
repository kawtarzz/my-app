import type { Config } from 'tailwindcss'



const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,tsx,jsx"
    
  ],
 theme: {
    extend: {
       colors: {
        'cream': '#F7F4EF',
        'cream-dark': '#EEEAE2',
        'ink': '#1C1917',
        'ink-muted': '#78716C',
        'blue': '#0d275e',
        'blue-dark':' #07132c',
        'blue-light': '#c2d3f7',
        'rust': '#C8523A',
        'rust-light': '#F0DDD8',
        'rust-dark': '#9C3F2A'
     },
      fontFamily: {
        sans: ['var(--font-sans)'], 
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}

export default config