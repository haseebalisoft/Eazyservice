/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1F3D36',
                secondary: '#F4EFE7',
                accent: '#C6A96B',
                textDark: '#2B2B2B',
                lightBg: '#FAF7F2',
            },
            fontFamily: {
                arabic: ['Cairo', 'Tajawal', 'IBM Plex Arabic', 'sans-serif'],
            },
            borderRadius: {
                'premium': '12px',
                'premium-lg': '16px',
            },
        },
    },
    plugins: [],
}
