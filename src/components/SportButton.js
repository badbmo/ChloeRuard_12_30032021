import React from "react";
import "../style/sportButton.css";

/**
 * SportButton component 
 * @param {string} src icon's source
 * @param {string} alt icon description
 * @returns {JSX} React component
 */

function SportButton({ src, alt }) {
	return (
		<button className="sportButton">
			<img src={src} alt={alt} className="sportButton__icon" />
		</button>
	);
}

export default SportButton;
