export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: { parser: "astro" },
		},
	],
	trailingComma: "none",
	semi: true,
	singleQuote: false,
	printWidth: 80,
};
