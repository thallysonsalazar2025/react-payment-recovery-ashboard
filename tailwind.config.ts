import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mpBlue: '#009EE3',
        mpYellow: '#FFF159',
        mpWhite: '#FFFFFF',
        mpDark: '#333333',
      },
      borderRadius: {
        lg: '0.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 14px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
