/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/layouts/*.{astro,js,jsx,ts,tsx}',
		'./src/pages/**/*.{astro,js,jsx,ts,tsx}',
		'./src/components/**/*.{astro,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundColor: {
				"custom-blue": '#00569e'
			},
			textColor: {
				"custom-blue": '#00569e'
			}
		},
	},
	plugins: [],
}
