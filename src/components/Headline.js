import React from "react";
import "../style/headline.css";
import PropTypes from "prop-types";

/**
 * Headline Component displaying tailored greetings to user
 * @param {string} name user's name
 * @returns {JSX} React component
 */

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

Headline.propTypes = {
  name: PropTypes.string
}

export default Headline;
