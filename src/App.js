import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="user/:userId" element={<User />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
