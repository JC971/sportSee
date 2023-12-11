import { PureComponent } from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

interface KindMap {
	[key: number]: string;
}

interface UserPerformance {
	userId: number;
	kind: KindMap;
	data: Array<{ value: number; kind: number }>;
}

const USER_PERFORMANCE: UserPerformance[] = [
	{
		userId: 12,
		kind: {
			1: "cardio",
			2: "energy",
			3: "endurance",
			4: "strength",
			5: "speed",
			6: "intensity",
		},
		data: [
			{ value: 80, kind: 1 },
			{ value: 120, kind: 2 },
			{ value: 140, kind: 3 },
			{ value: 50, kind: 4 },
			{ value: 200, kind: 5 },
			{ value: 90, kind: 6 },
		],
	},
];

const adaptData = USER_PERFORMANCE[0].data.map((item) => {
	return {
		subject: USER_PERFORMANCE[0].kind[item.kind],
		value: item.value,
	};
});

export default class PerformanceRadarChart extends PureComponent {
	static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

	render() {
		return (
			<div className="performances">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="80%" data={adaptData}>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis />
						<Radar
							name="User Performance"
							dataKey="value"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
