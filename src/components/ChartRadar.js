import React from "react";
import "../style/chartRadar.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

function ChartRadar({ performance }) {
	const data = performance;

	return (
		<article className="chartRadar">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius={150} data={data}>
					<PolarGrid radialLines={false} stroke="white" />
					<PolarAngleAxis dataKey="kind" tick={true} />
					<Radar name="Performance" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</article>
	);
}

export default ChartRadar;
