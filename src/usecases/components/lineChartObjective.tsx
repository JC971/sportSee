import { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		day: 1,
		sessionLength: 30,
	},
	{
		day: 2,
		sessionLength: 23,
	},
	{
		day: 3,
		sessionLength: 45,
	},
	{
		day: 4,
		sessionLength: 50,
	},
	{
		day: 5,
		sessionLength: 0,
	},
	{
		day: 6,
		sessionLength: 0,
	},
	{
		day: 7,
		sessionLength: 60,
	},
];

export default class LineChartObjective extends PureComponent {
	static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

	render() {
		return (
			<div
				style={{ width: "255px", height: "263px" }}
				className="average-duration"
			>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: -50,
							bottom: 20,
						}}
					>
						<XAxis
							dataKey="day"
							axisLine={false}
							tick={{
								fill: "#FFFFFF",
								style: {
									transform: "translate( 15px)",
								},
							}}
							tickFormatter={(day) => {
								const daysAbr = ["L", "M", "M", "J", "V", "S", "D"];
								return daysAbr[day - 1];
							}}
						/>
						<YAxis axisLine={false} tick={false} />
						<Tooltip />

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
	}
}
