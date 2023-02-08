/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/main/resources/templates/*.html'],
    theme: {
        extend: {
            colors: {
                'thymeleaf-green': 'darkseagreen',
                'thymeleaf-blue': '#1fb6ff',
                'thymeleaf-purple': '#7e5bef',
                'thymeleaf-pink': '#ff49db',
                'thymeleaf-orange': '#ff7849',
                'thymeleaf-greens': '#13ce66',
                'thymeleaf-yellow': '#ffc82c',
                'thymeleaf-gray-dark': '#273444',
                'thymeleaf-gray': '#8492a6',
                'thymeleaf-gray-light': '#d3dce6',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};
