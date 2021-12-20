import React from "react";
import "../style/sportButton.css";

function SportButton({ src, alt }) {
	return (
		<button className="sportButton">
			<img src={src} alt={alt} className="sportButton__icon" />
		</button>
	);
}

export default SportButton;
