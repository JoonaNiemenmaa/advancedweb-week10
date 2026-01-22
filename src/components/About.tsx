import { useState, useEffect } from "react";
import "./css/about.css";

type TItem = {
	title: string;
	body: string;
};

const COUNT = 12;

export default function About() {
	const [items, setItems] = useState<TItem[]>([]);
	const [count, setCount] = useState<number>(COUNT);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json: []) => {
				setItems(json);
			});
	}, []);

	let key = 0;

	return (
		<>
			<div className="grid-container">
				{items.slice(0, count).map((item) => (
					<div className="grid-item" key={key++}>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
					</div>
				))}
			</div>
			{count <= items.length ? (
				<button
					className="more-button"
					onClick={() => {
						setCount(count + COUNT);
					}}
				>
					Load more
				</button>
			) : null}
		</>
	);
}
