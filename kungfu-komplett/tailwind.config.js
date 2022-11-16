/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

const mytheme = {
    primary: '#DDA74F',
    secondary: '#A76B09',
    accent: '#1FB2A6',
    neutral: '#181B22',
    'base-100': '#272A31',
    info: '#3ABFF8',
    success: '#36D399',
    warning: '#FBBD23',
    error: '#F87272',

    '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
    '--rounded-btn': '0', // border radius rounded-btn utility class, used in buttons and similar element
    '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
    '--animation-btn': '0.25s', // duration of animation when you click on button
    '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
    '--btn-text-case': 'uppercase', // set default text transform for buttons
    '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
    '--border-btn': '1px', // border width of buttons
    '--tab-border': '1px', // border width of tabs
    '--tab-radius': '0.5rem', // border radius of tabs
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
        themes: [{mytheme}],
    },
}
