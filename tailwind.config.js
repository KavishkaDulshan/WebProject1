/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2c2c2c',
                secondary: '#8b7355',
                accent: '#c9a96e',
                dark: '#1a1a1a',
                light: '#f5f5f5',
                muted: '#6b7280',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                logo: ['Cinzel', 'serif'],
                display: ['Italiana', 'serif'],
                body: ['Crimson Pro', 'serif'],
            },
            animation: {
                fadeInUp: 'fadeInUp 0.8s ease-out',
                bounce: 'bounce 2s infinite',
                slideDown: 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
