import i18next from "i18next";
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

i18next.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
