/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00d2ff",
                secondary: "#3a7bd5",
                "dark-bg": "#ffffff",
                "deep-blue": "#f8f9fa",
            },
            fontFamily: {
                main: ["Poppins", "sans-serif"],
                accent: ["Montserrat", "sans-serif"],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 210, 255, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 210, 255, 0.6)' },
                }
            }
        },
    },
    plugins: [],
}
