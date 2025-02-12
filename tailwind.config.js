/** @type {import('tailwindcss').Config} */
import tailwinganimation from 'tailwindcss-animate'
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 6s ease infinite',
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
