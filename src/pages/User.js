import React from "react";
import "../style/user.css";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Dashboard from "../components/Dashboard";

/**
 * User Page showing profil's data
 * @returns {JSX} React component
 */

function User() {
	return (
		<React.Fragment>
			<Header />
			<main className="user__content">
				<SideNav />
				<Dashboard />
			</main>
		</React.Fragment>
	);
}

export default User;
