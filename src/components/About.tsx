import { useState, useEffect } from "react";
import "./css/about.css";

type TItem = {
	title: string;
	body: string;
};

export default function About() {
	const [items, setItems] = useState<TItem[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => {
				setItems(json);
			});
	}, []);

	let key = 0;

	return (
		<div className="grid-container">
			{items.map((item) => (
				<div className="grid-item" key={key++}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</div>
			))}
		</div>
	);
}
