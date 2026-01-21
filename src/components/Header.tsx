import "./css/header.css";

export default function Header() {
	return (
		<header className="header">
			<h1>Joonan kammio</h1>
			<nav>
				<ul>
					<a href="/">Home</a>
					<a href="/about">About</a>
					<button>FI</button>
					<button>EN</button>
				</ul>
			</nav>
		</header>
	);
}
