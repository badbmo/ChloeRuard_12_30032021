import React from "react";
import "../style/chartWeight.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function ChartWeight({ activity }) {
	const data = activity;

	return (
		<article className="chartWeight">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="kilogram" fill="#8884d8" />
					<Bar dataKey="calories" fill="#82ca9d" />
				</BarChart>
			</ResponsiveContainer>
		</article>
	);
}

export default ChartWeight;
