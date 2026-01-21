import { useState, useEffect } from "react";

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
		<ul>
			{items.map((item) => (
				<div key={key++}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</div>
			))}
		</ul>
	);
}
