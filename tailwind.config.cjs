/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'text-primary-old': '#403092',
			'text-primary': '#58216f',
			'text-primary2-old': '#6a6296',
			'text-primary2': '#8846a3',
			'text-primary3-old': '#22194d',
			'text-primary3': '#48145e',
			'text-secondary': "#a491c3",
			'text-secondary2': "#ffffff75",
			'border-blue': "#c9c1f7",
			"white": "#fffffc",
			"orange": "#ffaa7e",
			"black": "#000000",
			"lightOrange": "#ffa738",
			"cream": "#C0B5F7",
			"red": "#ff1c00",
			"darkOrange": "#fa6c25",
			"green": "#064000",
			"pink": "#c6569f",
			"bgPink": "#fcf0f5",

		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Roboto Slab', "serif"]
		},
	},
	plugins: [],
}
