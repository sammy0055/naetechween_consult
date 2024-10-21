/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
    theme: {
        extend: {},
        backgroundImage: {
            'custom-radial':
                'radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
        },
    },
    plugins: [],
};
