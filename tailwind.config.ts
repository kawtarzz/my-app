import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['new-spirit-condensed', 'Georgia', 'serif'],
        sans: ['bonnie, sans-serif', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        cream: '#F7F4EF',
        'cream-dark': '#EEEAE2',
        ink: '#1C1917',
        'ink-muted': '#78716C',
        rust: '#C8523A',
        'rust-light': '#F0DDD8',
        'rust-dark': '#9C3F2A',
        sage: '#6B7C65',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 28s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
