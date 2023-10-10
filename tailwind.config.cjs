/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'text-primary': '#403092',
			'text-secondary': "#a491c3",
			"white": "#fffffc",
			"orange": "#ffaa7e",
			"black": "#000000",
			"lightOrange": "#ffa738",
			"cream": "#E8DBB0",
			"red": "#ff1c00"
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Roboto Slab', "serif"]
		},
	},
	plugins: [],
}
