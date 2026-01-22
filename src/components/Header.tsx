import { useTranslation } from "react-i18next";
import "./css/header.css";

export default function Header() {
	const { t, i18n } = useTranslation();

	return (
		<header className="header">
			<h1>Joonan kammio</h1>
			<nav>
				<ul>
					<a href="/">{t("Home")}</a>
					<a href="/about">{t("About")}</a>
					<button
						onClick={() => {
							i18n.changeLanguage("fi");
						}}
					>
						FI
					</button>
					<button
						onClick={() => {
							i18n.changeLanguage("en");
						}}
					>
						EN
					</button>
				</ul>
			</nav>
		</header>
	);
}
