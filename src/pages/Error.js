import React from "react";
import { Link } from "react-router-dom";
import "../style/error.css"

function Error() {
	return (
		<main className="error">
			<h1 className="error__title">404</h1>
			<p className="error__info">Oups! La page que vous demandez n'existe pas.</p>
			<Link className="error__link" to="/">
				Retourner sur mon tableau de bord
			</Link>
		</main>
	);
}

export default Error;
