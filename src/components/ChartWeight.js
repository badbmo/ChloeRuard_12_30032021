import React from "react";
import "../style/chartWeight.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Bar Chart Component displaying weight and Kcal evolution
 * @param {Array} activity user's data
 * @returns {JSX} React component
 */

function ChartWeight({ activity }) {

	const data = activity;

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="chartWeight__tooltip">
					<p>{`${payload[0].value}kg`}</p>
					<p>{`${payload[1].value}Kcal`}</p>
				</div>
			);
		}
		return null;
	};

	const CustomXAxis = (tick) => {
		if(tick){
			const number=tick.split("-").pop()
			if(number.startsWith("0")){
				return number.split("0").pop()
			}
			else{
				return number
			};
	}
	};

	return (
		<article className="chartWeight">
			<div className="chartWeight__info">
				<span className="chartWeight__title">
					Activité quotidienne
				</span>
				<div className="chartWeight__legend">
					<svg height="15" width="15"><circle cx="50%" cy="50%" fill="#282D30" r="4"></circle></svg>
					<span className="chartWeight__legend-weight">
						Poids (kg)
					</span>
					<svg height="15" width="15"><circle cx="50%" cy="50%" fill="#FF0000" r="4"></circle></svg>
					<span className="chartWeight__legend-calory">
						Calories brûlées (kCal)
						</span>
				</div>
			</div>
			<ResponsiveContainer width="100%" height="78%">
				<BarChart data={data}
					margin={{ top: 5, right: 30, left: 30, bottom: 30, }}
					barGap={8}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false}  />
					<XAxis dataKey="day" tickFormatter={CustomXAxis} tickLine={false} tickMargin={15} tick={{ fill: "#9B9EAC" }} />
					<YAxis dataKey="kilogram" yAxisId="kilogram" orientation="right" type="number" domain={['dataMin-7', 'dataMax+3']}  axisLine={false} tickLine={false} tick={{ fill: "#9B9EAC" }} tickMargin={30} />
					<YAxis dataKey="calories" yAxisId="calories" orientation="left" type="number" domain={[0 , 'dataMax+20']} hide={true} />
					<Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C4C4C4', opacity: 0.5 }} offset={40}/>
					<Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30" barSize={10} legendType="none" radius={[5, 5, 0, 0]}/>
					<Bar dataKey="calories" yAxisId="calories" fill="#FF0000" barSize={10} legendType="none" radius={[5, 5, 0, 0]}/>
				</BarChart>
			</ResponsiveContainer>
		</article>
	);
}

ChartWeight.propTypes = {
  activity: PropTypes.array
}

export default ChartWeight;
