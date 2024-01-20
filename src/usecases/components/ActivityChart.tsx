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
import { TooltipProps} from "recharts";
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


//1er

const CustomTooltip = ({
	active,
	payload,
}: {
	active: boolean;
	payload: { value: string }[];
}) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom__tooltip">
				<p className="custom__tooltip__label">{`${payload[1].value}kg`}</p>
				<p className="custom__tooltip__intro">{`${payload[0].value}Kcal`}</p>
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
			<span className="activity-title">Activité quotidienne</span>
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
						tick={{ dy: 10 }} //pour mettre de l'espace entre l'axe et les étiquettes
						fontSize={14}
					/>

					<YAxis
						dataKey="calories"
						tickCount={4}
						orientation="right"
						axisLine={false}
						tickLine={false}
						style={{ fontSize: "14px" }}
						stroke="#9B9EAC"
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


//////




/*

const CustomTooltip = ({
	active,
	payload,
}: {
	active: boolean;
	payload: { value: string }[];
}) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom__tooltip">
				<p className="custom__tooltip__label">{`${payload[1].value}kg`}</p>
				<p className="custom__tooltip__intro">{`${payload[0].value}Kcal`}</p>
			</div>
		);
	}

	return null;
};
*/