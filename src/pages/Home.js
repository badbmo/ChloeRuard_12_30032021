import React from "react";
import "../style/home.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

/**
 * Home Page to choose user
 * @returns {JSX} React component
 */

function Home() {
	const usersList = [
		{
			id: 12,
			name: "Karl Dovineau",
		},
		{
			id: 18,
			name: "Cecilia Ratorez",
		},
	];

	return (
		<React.Fragment>
			<Header />
			<main className="home__content">
				<h1 className="home__title">Bienvenue chez SportSee</h1>
				<section className="login">
					<div className="login__id">
						<span className="id__title">Identifiant</span>
						<div className="id__input">exemple@sportsee.com</div>
					</div>
					<div className="login__password">
						<span className="password__title">Mot de passe</span>
						<div className="password__input">*****</div>
					</div>
					<div className="login__wip">En maintenance</div>
				</section>

				<section className="usersList">
					<div className="usersList__title">Veuillez sélectionner votre profil :</div>
					<ul className="usersList__content">
						{usersList.map((user) => (
							<Link className="usersList__name" key={user.id} to={`user/${user.id}`}>
								{user.name}
							</Link>
						))}
					</ul>
				</section>
			</main>
		</React.Fragment>
	);
}

export default Home;
