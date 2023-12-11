const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
	theme: {
		extend: {
			screens: {
				sm: "496px",
			},
			fontFamily: {
				sans: ["Geist", ...defaultTheme.fontFamily.sans],
				mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
			},

			colors: {
				//Radix UI colors : Indigo
				"lt-indigo-bg": "#FDFDFE",
				"lt-indigo-bg-alt": "#F7F9FF",
				"lt-indigo-interactive-component": "#D2DEFF",
				"lt-indigo-border": "#C1D0FF",
				"lt-indigo-border-focus": "#9B9EF0",
				"lt-indigo-solid-color-button": "#5B5BD6",
				"lt-indigo-high-contrast-text": "#1F2D5C",
				"lt-indigo-secondary-text-links": "#3A5BC7",
				"lt-indigo-txt": "#11131F",

				//Radix UI colors : Grimsom
				"lt-grimsom-bg": "##FEF7F9",
				"lt-grimsom-interactive-component": "#FACEDD",
				"lt-grimsom-border": "#F3BED1",
				"lt-grimsom-border-focus": "#E093B2",
				"lt-grimsom-solid-color-button": "#E93D82",
				"lt-grimsom-high-contrast-text": "#621639",
				"lt-grimsom-secondary-text-links": "#CB1D63",
				"lt-grimsom-txt": "#191114",

				//Radix UI colors : Teal
				"dt-teal-bg": "#0D1514",
				"dt-teal-bg-alt": "#111C1B",
				"dt-teal-interactive-component": "#084843",
				"dt-teal-border": "#145750",
				"dt-teal-border-focus": "#207E73",
				"dt-teal-solid-color-button": "#12A594",
				"dt-teal-high-contrast-text": "#ADF0DD",
				"dt-teal-secondary-text-links": "#0BD8B6",
				"dt-teal-txt": "#FAFEFD",

				//Radix UI colors : Amber
				"dt-amber-bg": "#16120C",
				"dt-amber-interactive-component": "#4D3000",
				"dt-amber-border": "#5C3D05",
				"dt-amber-border-focus": "#714F19",
				"dt-amber-solid-color-button": "#FFC53D",
				"dt-amber-high-contrast-text": "#FFE7B3",
				"dt-amber-secondary-text-links": "#FFCA16",
				"dt-amber-txt": "#FEFDFB",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
