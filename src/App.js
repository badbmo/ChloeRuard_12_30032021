import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./components/User";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<User />} />
			</Routes>
		</Router>
	);
}

export default App;
