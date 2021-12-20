import React from "react";
import "../style/macroWidget.css";

function MacroWidget({ src, amount, type, color }) {
	return (
		<article className="macroWidget">
			<div className={`macroWidget__icon icon-${color}`}>
				<img src={src} alt={`icone ${type}`} className="macroWidget__svg" />
			</div>
			<div className="macroWidget__description">
				<span className="macroWidget__amount">{amount}</span>
				<span className="macroWidget__type">{type}</span>
			</div>
		</article>
	);
}

export default MacroWidget;
