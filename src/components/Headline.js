import React from "react";
import "../style/headline.css";

function Headline({ name }) {
	return (
		<div className="headline">
			<h1 className="headline__greeting">
				Bonjour <span className="headline__name">{name}</span>
			</h1>
			<span className="headline__congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
		</div>
	);
}

export default Headline;
