/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode base colors
        'mogul-white': '#FFFFFF',
        'mogul-cream': '#FAFAFA',
        'mogul-light': '#F5F5F7',
        'mogul-gray': '#86868B',
        'mogul-text': '#1D1D1F',
        // Dark accent sections
        'mogul-dark': '#0a0a0f',
        'mogul-navy': '#11111a',
        'mogul-card': '#161622',
        // Brand colors
        'mogul-blue': '#1877F2',
        'neon-blue': '#00f0ff',
        'neon-purple': '#7000ff',
        'neon-cyan': '#00fff0',
        // Utility
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // I should probably add a font
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam 3s linear infinite',
      },
      keyframes: {
        'border-beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-linear': {
          'mask-image': 'linear-gradient(black, black)',
          '-webkit-mask-image': 'linear-gradient(black, black)',
        },
      })
    },
  ],
}
