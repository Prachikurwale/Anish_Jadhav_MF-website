/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Yeh line batati hai ki Tailwind ko kahan-kahan check karna hai
    ],
    theme: {
      extend: {
        // Yahan hum fonts, keyframes, aur animations define kar rahe hain
        fontFamily: {
          heading: ['Playfair Display', 'serif'],
          body: ['Poppins', 'sans-serif'],
        },
        keyframes: {
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'slide-in-down': {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'grow-width': {
            '0%': { width: '0%' },
            '100%': { width: '96px' }, // Same as w-24
          },
          'zoom-in': {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
          'fade-in': 'fade-in 0.8s ease-out forwards',
          'slide-in-down': 'slide-in-down 0.7s ease-out forwards',
          'grow-width': 'grow-width 0.5s ease-out forwards',
          'zoom-in': 'zoom-in 0.5s ease-out forwards',
        },
        // Animation delays ke liye classes (optional, lekin accha hai)
        animationDelay: {
          '100': '100ms',
          '200': '200ms',
          '300': '300ms',
          '400': '400ms',
          '600': '600ms',
          'slow': '800ms',
          'fast': '50ms',
        }
      },
    },
    plugins: [
      // Yeh plugin animation delays ko use karne mein madad karega
      function ({ addUtilities, theme }) {
        const delays = theme('animationDelay');
        const utilities = Object.entries(delays).map(([key, value]) => ({
          [`.animation-delay-${key}`]: {
            'animation-delay': value,
          },
        }));
        addUtilities(utilities);
      }
    ],
  }