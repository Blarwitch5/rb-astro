import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://romainblary.vercel.app",
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/styles/[name][extname]",
        },
      },
    },
  },
});
