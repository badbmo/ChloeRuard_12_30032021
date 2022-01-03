import React from "react";
import "../style/chartRadar.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Radar Chart Component displaying performance in different skills
 * @param {Array} performance user's data
 * @returns {JSX} React component
 */

function ChartRadar({ performance }) {

	const data = performance;

	const CustomAxis =(tick) =>{
		if(tick === 1){return "Cardio"}
		if(tick === 2){return "Energie"}
		if(tick === 3){return "Endurance"}
		if(tick === 4){return "Force"}
		if(tick === 5){return "Vitesse"}
		if(tick === 6){return "Intensité"}
	}

	return (
		<article className="chartRadar">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius={90} data={data}>
					<PolarGrid radialLines={false} stroke="white" strokeWidth={1.2}/>
					<PolarAngleAxis dataKey="kind" tick={true} tickLine={false} tickFormatter={CustomAxis} fontSize={12} stroke="white"/>
					<Radar name="Performance" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</article>
	);
}

ChartRadar.propTypes = {
  performance: PropTypes.array.isRequired
}

export default ChartRadar;
