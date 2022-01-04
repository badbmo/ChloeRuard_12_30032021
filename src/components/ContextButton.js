import React from "react";
import "../style/contextButton.css";
import { useContext } from "react";
import { FetchContext } from "../utils/context/fetchContext"

/**
 * Context Button component 
 * @returns {JSX} React component
 */

function ContextButton() {

	const {toggleFetch, fetch} = useContext(FetchContext);

	return (
		<button className="contextButton" onClick={()=> toggleFetch()}>
			Data from : {fetch === 'API' ? 'API' : 'Mock'}
		</button>
	);
}

export default ContextButton;
