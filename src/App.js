import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import User from "./pages/User";
import Error from "./pages/Error";
import Home from "./pages/Home";
import {FetchProvider} from "./utils/context/fetchContext";

function App() {
	return (
		<FetchProvider>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="user/:userId" element={<User />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
		</FetchProvider>
	);
}

export default App;
