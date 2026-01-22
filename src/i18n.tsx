import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			Home: "Home",
			About: "About",
			frontpage: "This is the front page",
		},
	},
	fi: {
		translation: {
			Home: "Etusivu",
			About: "Tietoa Meistä",
			frontpage: "Tämä on etusivu",
		},
	},
};

i18next
	.use(initReactI18next)
	.use(I18NextHttpBackend)
	.use(I18nextBrowserLanguageDetector)
	.init({
		resources,
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18next;
