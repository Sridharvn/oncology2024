/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'text-primary': '#403092',
			'text-primary2': '#6a6296',
			'text-secondary': "#a491c3",
			'text-secondary2': "#ffffff75",
			'border-blue': "#c9c1f7",
			"white": "#fffffc",
			"orange": "#ffaa7e",
			"black": "#000000",
			"lightOrange": "#ffa738",
			"cream": "#C0B5F7",
			"red": "#ff1c00",
			"darkOrange": "#fa6c25"

		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Roboto Slab', "serif"]
		},
	},
	plugins: [],
}
