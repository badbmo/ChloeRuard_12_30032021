import React from "react";
import "../style/chartGoal.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function ChartGoal({ averageSessions }) {
	const data = averageSessions;

	return (
		<article className="chartGoal">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<XAxis dataKey="day" />
					<Tooltip />
					<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</article>
	);
}

export default ChartGoal;
