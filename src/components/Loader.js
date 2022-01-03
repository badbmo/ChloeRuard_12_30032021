import React from "react";
import "../style/loader.css";

/**
 * Loader Component
 * @returns {JSX} React component
 */

function Loader() {
	return (
		<div className="loader">
			<span className="spinner"></span>
		</div>
	);
}

export default Loader;
