export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: { parser: "astro" }
		}
	],
	trailingComma: "all",
	semi: true,
	singleQuote: false,
	printWidth: 80
}
