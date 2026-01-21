import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
/*import App from "./App.tsx";*/

import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import MyContainer from "./components/MyContainer.tsx";
import React from "react";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={
					<React.Fragment>
						<Header></Header>
						<MyContainer></MyContainer>
					</React.Fragment>
				}
			/>
			<Route
				path="/about"
				element={
					<React.Fragment>
						<Header></Header>
						<About></About>
					</React.Fragment>
				}
			/>
		</Routes>
	</BrowserRouter>,
);
