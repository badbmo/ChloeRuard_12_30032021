import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import Error from "./pages/Error";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<User />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
