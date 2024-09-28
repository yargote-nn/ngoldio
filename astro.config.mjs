// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en", "fr"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
