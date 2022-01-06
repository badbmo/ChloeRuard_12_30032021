import React from "react";
import "../style/macroWidget.css";
import PropTypes from "prop-types";

/**
 * Macrowidget Component displaying macronutriment card
 * @param {string} src source card's icon
 * @param {number} amount macronutriment's amount
 * @param {string} unit macronutriment's unit
 * @param {string} type type card's icon
 * @param {string} color card's color
 * @returns {JSX} React component
 */

function MacroWidget({ src, amount, unit, type, color }) {
	return (
		<article className="macroWidget">
			<div className={`macroWidget__icon icon-${color}`}>
				<img src={src} alt={`icone ${type}`} className="macroWidget__svg" />
			</div>
			<div className="macroWidget__description">
				<span className="macroWidget__amount">{amount}{unit}</span>
				<span className="macroWidget__type">{type}</span>
			</div>
		</article>
	);
}

MacroWidget.propTypes = {
  src: PropTypes.string,
	amount: PropTypes.number,
	unit: PropTypes.string,
	type: PropTypes.string,
	color: PropTypes.string
}

export default MacroWidget;
