import { useState, useEffect } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import './lineChart.scss'
import { getUserAverageInMemory } from "../get-user-average-sesssions";
import type { Session } from "../get-user-average-sesssions";
import { ContentType } from "recharts/types/component/DefaultLegendContent";

type LineChartObjectiveProps = {
	userId: number;
};

type TooltipCustomProps = {
	payload: [
		{
			value: string;
			color: string;
			
		}
	];
	active: boolean;
	label: string | number;
	
};

const TooltipCustom = ({
	payload,
	active,
	label,
	
	
}: TooltipCustomProps): ContentType | null => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip" style={{fontSize: '8px',color:'white'}}>
				{/*<p className="label">{`${label} : ${payload[0].value}`}</p>
				<p className="desc"> min.</p>*/}
				<p className="label"style={{backgroundColor:'white', color:'black'}} >{`${payload[0].value} min.`}</p>
			</div> //customiser
		);
	}

	return null;
};

export const LineChartObjective = ({ userId }: LineChartObjectiveProps) => {
	const [average, setAverage] = useState<Session[]>([]);

	useEffect(() => {
		const data = getUserAverageInMemory();
		setAverage(data.sessions);
	}, []);

	if (average.length === 0) return null;

	return (
		<div
			style={{ width: "258px", height: "263px", position: "relative" }}
			className="average-duration"
		>
			<div
				className="average-text"
				style={{
					position: "absolute",
					top: "10px",
					left: "20px",
					fontSize: "15px",
					color: "white",
					width:'180px'
				}}
			>
				Durée moyenne des sessions
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={average}
					margin={{
						top: 5,
						right: 20,
						left: -40,
						bottom: 20,
					}}
				>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						tick={{
							fill: "#FFFFFF",
							opacity: "0.5",
							
						}}
						tickFormatter={(day) => {
							
							const daysAbr = ["L", "M", "M", "J", "V", "S", "D"];
							return daysAbr[day -1];
						}}
					/>
					<YAxis axisLine={false} tick={false} />
					<Tooltip content={TooltipCustom} />

					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="#fff"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
