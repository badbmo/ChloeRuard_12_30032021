import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../style/header.css";

/**
 * Header Component displaying nav
 * @returns {JSX} React component
 */

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={Logo} alt="logo de SportSee" />
			</Link>
			<nav className="header__nav">
				<NavLink exact className="nav__option" to="/">
					Accueil
				</NavLink>
				<NavLink className="nav__option" to="/*">
					Profil
				</NavLink>
				<NavLink className="nav__option" to="/*">
					Réglage
				</NavLink>
				<NavLink className="nav__option" to="/*">
					Communauté
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
