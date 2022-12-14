/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

const kkTheme = {
    'color-scheme': 'light',
    primary: '#0D0D0D',
    'primary-content': '#ffffff',
    secondary: '#ff002c',
    'secondary-content': '#ffffff',
    accent: '#262626',
    'accent-content': '#ffffff',
    neutral: '#000000',
    'neutral-content': '#ffffff',
    'base-100': '#ffffff',
    'base-200': '#F2F2F2',
    'base-300': '#E6E5E5',
    'base-content': '#000000',
    info: '#0070F3',
    'info-content': '#ffffff',
    success: '#21CC51',
    'success-content': '#ffffff',
    warning: '#FF6154',
    'warning-content': '#ffffff',
    error: '#DE1C8D',
    'error-content': '#ffffff',
    '--rounded-box': '0.25rem',
    '--rounded-btn': '0.125rem',
    '--rounded-badge': '0.125rem',
    '--animation-btn': '0',
    '--animation-input': '0',
    '--btn-focus-scale': '1',
    '--tab-radius': '0',
}

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                h1: ['var(--anton-font)', ...fontFamily.sans],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [{lofi: kkTheme}],
    },
}
