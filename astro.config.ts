import { defineConfig } from "astro/config";

// Astro integration imports
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import AstroPWA from "@vite-pwa/astro";
import mdx from "@astrojs/mdx";
import vercelEdge from "@astrojs/vercel/static";

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig";

export default defineConfig({
	output: "static",
	adapter: vercelEdge(),
	site: seoConfig.baseURL,
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
	},
	integrations: [
		mdx(),
		tailwind(),
		sitemap(),
		compress(),
		AstroPWA({
			base: "/",
			scope: "/",
			includeAssets: ["favicon.svg"],
			registerType: "autoUpdate",
			manifest: {
				name: manifest.name,
				short_name: manifest.short_name,
				description: manifest.description,
				theme_color: manifest.theme_color,
				background_color: manifest.background_color,
				icons: manifest.icons,
			},
		}),
	],
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: "assets/styles/[name][extname]",
				},
			},
		},
		plugins: [],
	},
});
