import { useTranslation } from "react-i18next";

export default function MyContainer() {
	const { t, i18n } = useTranslation();
	return <p>{t("frontpage")}</p>;
}
