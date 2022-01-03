import React from "react";
import "../style/sportButton.css";
import PropTypes from "prop-types";

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

SportButton.propTypes = {
  src: PropTypes.string.isRequired,
	alt: PropTypes.string
}

export default SportButton;
