import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MyContainer from "./components/MyContainer";
import About from "./components/About";

import React from "react";

function App() {
	return (
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
		</BrowserRouter>
	);
}

export default App;
