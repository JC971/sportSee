import { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { TooltipProps, Payload } from "recharts";
import { ContentType } from "recharts/types/component/DefaultLegendContent";
import { getUserActivityInMemory } from "../get-user-activity";
import type { Session } from "../get-user-activity";
import './activityChart.scss';

type ActivitiyChartProps = {
	userId: number;
};

type renderLegendProps = {
	payload: [
		{
			value: string;
			color: string

		}
	];
};
const renderLegend = ({ payload }: renderLegendProps): ContentType => {
	return (
		<ul
			style={{
				listStyleType: "none",
				textAlign: "right",
				display: "flex",
				justifyContent: "flex-end",
			}}
		>
			{payload.map((entry, index) => (
				<li
					key={`item-${index}`}
					style={{
						display: "flex",
						alignItems: "center",
						marginBottom: "4px",
						paddingRight: "20px",
						color: "#74798C",
						fontSize:14
					}}
				>
					<svg height="10" width="10" style={{ marginRight: 10 }}>
						<circle cx="5" cy="5" r="5" fill={entry.color} />
					</svg>
					{entry.value}
				</li>
			))}
		</ul>
	);
};

type CustomTooltipProps = TooltipProps<number, string>;

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				{payload.map((entry, index) => {
					
					let modifiedName;
					let nameStyle = {};

					const trimmedName = entry.name ? entry.name.trim() : "";

					if (trimmedName === "poids (kg)") {
						modifiedName = "Kg";
						nameStyle = {
							fontWeight: "bold",
							color: "#FFFFFF",
							fontSize: "7px",
							
						};
					} else if (trimmedName === "calories brûlées (kCall)") {
						modifiedName = "KCall";
						nameStyle = {
							color: '#FFFFFF',
							fontSize: '7px',
							fontWeight:'bold'
						}
					} else {
						modifiedName = entry.name; 
					}

					return (
						<div className="tool-style" key={index} style={{ color: entry.color }}>
						<span style={nameStyle}>{`${entry.value}: ${modifiedName}`}</span>
						</div>
					);
				})}
			</div>
		);
	}
	return null;
};




export const ActivityChart = ({ userId }: ActivitiyChartProps) => {
	const [activities, setActivities] = useState<Session[]>([]);

	useEffect(() => {
		const data = getUserActivityInMemory();
		setActivities(data.sessions);
	}, []);

	if (activities.length === 0) return null;

	return (
		<div className="daily-activity">
			<ResponsiveContainer width="100%" height="94%">
				<BarChart
					width={500}
					height={300}
					data={activities}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
						horizontal={true}
					/>
					<XAxis
						dataKey="day"
						tickFormatter={(value, index) => `${index + 1}`}
						tick={{ dy: 10 }} //espace entre l'axe et les étiquettes
						fontSize={14}
					/>

					<YAxis
						axisLine={false}
						tickLine={true}
						tick={true}
						tickCount={4}
						orientation="right"
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						verticalAlign="top"
						align="right"
						content={renderLegend}
						margin={{ right: 20, top: 20 }}
					/>
					<Bar
						dataKey="kilogram"
						name="poids (kg)"
						fill="#282D30"
						activeBar={<Rectangle fill="grey" stroke="#" />}
						radius={[3, 3, 0, 0]}
						barSize={10}
					/>
					<Bar
						dataKey="calories"
						name=" calories brûlées (kCall)"
						fill="#E60000"
						activeBar={<Rectangle fill="red" stroke="#FFF" />}
						radius={[3, 3, 0, 0]}
						barSize={10}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

