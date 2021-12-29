import React from "react";
import "../style/chartKpi.css";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

function ChartKpi({ score }) {
	const data = [{ value: score }, { value: 1 - score }];
	const colors = ["#FF0000", "transparent"];

	return (
		<article className="chartKpi">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<circle cx="50%" cy="50%" fill="white" r="60"></circle>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={70}
						cornerRadius={10}
						startAngle={90}
						endAngle={360 + 90}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth={0} />
						))}
						<Label value={score * 100} offset={0} position="center" />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</article>
	);
}

export default ChartKpi;
