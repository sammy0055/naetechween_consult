/** @type {import('tailwindcss').Config} */
import tailwinganimation from 'tailwindcss-animate';
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                'adobe-dark': '#2C2C2C',
                'adobe-light': '#F5F5F5',
                'adobe-blue': '#3A86FF',
                'adobe-gray': '#6C6C6C',
                'adobe-green': '#00C853',
                'adobe-red': '#FF1744',
                'adobe-purple': '#8338EC',
                'adobe-yellow': '#FFBE0B',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                adobe: ['"Source Sans Pro"', 'sans-serif'],
                'adobe-bold': ['"Source Sans Pro Bold"', 'sans-serif'],
            },
            boxShadow: {
                adobe: '0 4px 14px rgba(0, 0, 0, 0.08)',
                'adobe-dark': '0 6px 18px rgba(0, 0, 0, 0.12)',
            },
            animation: {
                'gradient-x': 'gradient-x 6s ease infinite',
                'adobe-pulse':
                    'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
        backgroundImage: {
            'custom-radial':
                'radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
            'gradient-to-r':
                'linear-gradient(to right, var(--tw-gradient-stops))',
        },
    },
    plugins: [tailwinganimation],
};
