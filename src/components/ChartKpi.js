import React from "react";
import "../style/chartKpi.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Kpi Chart Component displaying pourcentage of goal
 * @param {Number} score user's data
 * @returns {JSX} React component
 */

function ChartKpi({ score }) {
	const data = [{ value: score }, { value: 1 - score }];
	const colors = ["#FF0000", "transparent"];

	return (
		<article className="chartKpi">
			<div className="chartKpi__title">
					Score
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<circle cx="50%" cy="50%" fill="white" r="75" className="chartKpi__circle"></circle>
					  <text x="50%" y="48%" textAnchor="middle">
          <tspan x="50%" fill="#20253A" className="chartKpi__legend-score">
            {score * 100}%
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="chartKpi__legend-subtext">
            de votre
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="chartKpi__legend-subtext">
            objectif
          </tspan>
        </text>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={75}
						outerRadius={85}
						cornerRadius={10}
						startAngle={90}
						endAngle={360 + 90}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth={0} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</article>
	);
}

ChartKpi.propTypes = {
  score: PropTypes.number.isRequired
}

export default ChartKpi;
