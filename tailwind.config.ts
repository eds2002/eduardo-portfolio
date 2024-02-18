import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          1: '#2f23f2', // 0%
          2: '#4439f3', // 10%
          3: '#594ff5', // 20%
          4: '#6d65f6', // 30%
          5: '#827bf7', // 40%
          6: '#9791f9', // 50%
          7: '#aca7fa', // 60%
          8: '#c1bdfb', // 70%
          9: '#d5d3fc', // 80%
          10: '#eae9fe', // 90%
          11: '#ffffff', // 100%
        },
        secondary: {
          1: '#2d00ff',
          2: '#421aff',
          3: '#5733ff',
          4: '#6c4dff',
          5: '#8166ff',
          6: '#9680ff',
          7: '#ab99ff',
          8: '#c0b3ff',
          9: '#d5ccff',
          10: '#eae6ff',
          11: '#ffffff',
        },
        tertiary: {
          1: '#00d2ff',
          2: '#1ad7ff',
          3: '#33dbff',
          4: '#4de0ff',
          5: '#66e4ff',
          6: '#80e9ff',
          7: '#99edff',
          8: '#b3f2ff',
          9: '#ccf6ff',
          10: '#e6fbff',
          11: '#ffffff',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
