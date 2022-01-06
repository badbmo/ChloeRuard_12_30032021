import React from "react";
import "../style/chartGoal.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Line Chart Component displaying average length of sessions in a week
 * @param {Array} averageSessions user's data
 * @returns {JSX} React component
 */

function ChartGoal({ averageSessions }) {

	const data = averageSessions;

	const CustomXAxis=(tick)=>{
		if(tick === 1){return "L"}
		if(tick === 2){return "M"}
		if(tick === 3){return "M"}
		if(tick === 4){return "J"}
		if(tick === 5){return "V"}
		if(tick === 6){return "S"}
		if(tick === 7){return "D"}
	}

	const CustomCursor = ({ points, height }) => {
		return (
			<rect
				x={points[0].x}
				y="0"
				height="100%"
				width="100%"
				fill="black"
				opacity={0.1}
			></rect>
		)
	}

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="chartGoal__tooltip">
					<p>{`${payload[0].value}min`}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<article className="chartGoal">
				<div className="chartGoal__title">
					Durée moyenne des<br></br>
					sessions
				</div>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 60,
						right: 20,
						left: 20,
						bottom: 20,
					}}
				>
					<XAxis dataKey="day" tickFormatter={CustomXAxis} tickLine={false} axisLine={false} tickMargin={10} tick={{ fill: "white", opacity:0.5 }}/>
					<Tooltip content={<CustomTooltip />} cursor={<CustomCursor/>} />
					<Line type="monotone" dataKey="sessionLength" strokeWidth={2} activeDot={{ r: 4, strokeWidth: 10, strokeOpacity: 0.3 }} dot={false} stroke="white" opacity={0.5}/>
				</LineChart>
			</ResponsiveContainer>
		</article>
	);
}

ChartGoal.propTypes = {
  averageSessions: PropTypes.array
}

export default ChartGoal;
