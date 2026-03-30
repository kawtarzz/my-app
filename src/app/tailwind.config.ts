import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
 theme: {
    extend: {
       colors: {
        'red-orange': '#C7522A',
        'teal': '#108585',
        'yellow': '#EBAF17',
        'beige': '#F7F5E7',
        'dark-blue': '#1A2474',
        'input-bg': '#E5E7EB',
        'white': '#fff',
     },
      fontFamily: {
        sans: ['var(--font-inter)'], // Overrides the default sans stack
        custom: ['var(--font-custom)'], // Adds a new 'font-custom' utility
      },
    },
  },
  plugins: [],
}

export default config