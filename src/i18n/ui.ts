import SpainFlag from "@/components/flags/spain.astro";
import UnitedStatesFlag from "@/components/flags/united-states.astro";
import FranceFlag from "@/components/flags/france.astro";

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	fr: {
		code: "fr",
		name: "Français",
		flag: FranceFlag,
	},
	en: {
		code: "en",
		name: "English",
		flag: UnitedStatesFlag,
	},
	es: {
		code: "es",
		name: "Español",
		flag: SpainFlag,
	},
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
	es: {
		nav: {
			home: "Inicio",
			discover: "Descubrir",
			about: "Acerca de NGold",
			reserves: "Reservas",
			faq: "Preguntas frecuentes",
			contact: "Contacto",
		},
		hero: {
			button: "Comprar",
		},
	},
	en: {
		nav: {
			home: "Home",
			discover: "Discover",
			about: "About NGold",
			reserves: "Reserves",
			faq: "FAQ",
			contact: "Contact",
		},
		hero: {
			button: "Buy",
		},
	},
	fr: {
		nav: {
			home: "Accueil",
			discover: "Découvrir",
			about: "À propos de NGold",
			reserves: "Réserves",
			faq: "FAQ",
			contact: "Contact",
		},
		hero: {
			button: "Acheter",
		},
	},
} as const;

export const routes = {
	es: {
		home: "",
		discover: "#descubrir",
		about: "#acerca-de",
		reserves: "#reservas",
		faq: "#preguntas-frecuentes",
		contact: "#contacto",
	},
	en: {
		home: "",
		discover: "#discover",
		about: "#about",
		reserves: "#reserves",
		faq: "#faq",
		contact: "#contact",
	},
	fr: {
		home: "",
		discover: "#decouvrir",
		about: "#a-propos-de",
		reserves: "#reserves",
		faq: "#faq",
		contact: "#contact",
	},
};
