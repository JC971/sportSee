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
	
	
	
}: TooltipCustomProps): ContentType | null => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
			{/* 	<p className="label">{`${label} : ${payload[0].value}`}</p>
				<p className="desc"> min.</p>*/ }
				<p className="label" >{`${payload[0].value} min.`}</p>
			</div> //customiser
		);
	}

	return null;
};

const CustomHover = (props: any) => {
	const points = props.points;

	return (
		<rect
			x={points[0].x}
			y="5"
			width="100%"
			height="100%"
			fill="rgba(0, 0, 0, 0.1)"
		/>
	);
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
			className="average-duration"
			style={{ width: "258px", height: "263px", position: "relative" }}
		>
			<div className="average-text">
				Durée moyenne des
				<br /> sessions
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={average}
					margin={{
						top: 5,
						right: 1,
						left: 15,
						bottom: 20,
					}}
				>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						tick={{ opacity: "0.5" }}
						strokeOpacity={0.5}
						stroke="#FFFFFF"
						tickFormatter={(day) => {
							const daysAbr = ["L", "M", "M", "J", "V", "S", "D"];
							return daysAbr[day - 1];
						}}
					/>
					<YAxis
						hide
						dataKey="sessionLength"
						tickLine={false}
						axisLine={false}
						domain={["dataMin - 60", "dataMax +90"]}
					/>

					<Tooltip content={TooltipCustom} cursor={<CustomHover />} />

					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="#FFFFFF"
						strokeOpacity={0.5}
						dot={false}
						activeDot={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 10 }}
					/>
					<Line/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

