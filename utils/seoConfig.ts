
/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://romainblary.com", // Change this to your production URL.
	description:
		"Welcome to Romain Blary's personal site. I'm a web developer based in Geneva. I'm passionate about web development, design, and technology in general.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Romain Blary's personal site - Web Developer", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
	name: "Romain Blary's personal site", // Change this to your website's name.
	short_name: "Romain Blary", // Change this to your website's short name.
	description:
		"Welcome to Romain Blary's personal site. I'm a web developer based in Geneva. I'm passionate about web development, design, and technology in general.", // Change this to your websites description.
	theme_color: "#fff", // Change this to your primary color.
	background_color: "#fff", // Change this to your background color.
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
