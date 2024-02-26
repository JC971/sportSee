import { PureComponent } from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";
import { getUserPerformanceInMemory } from "../usecases/get-user-performance";

interface KindMap {
	[key: number]: string;
}

interface UserPerformance {
	userId: number;
	kind: KindMap;
	data: Array<{ value: number; kind: number }>;
}

interface RadarChartData {
	subject: string;
	value: number;
}

export default class PerformanceRadarChart extends PureComponent<
	{},
	{ data: any[] }
> {
	static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

	constructor(props: {}) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		const userPerformanceData = getUserPerformanceInMemory();
		const activityNameMap = {
			1: "Cardio",
			2: "Energie",
			3: "Endurance",
			4: "Force",
			5: "Vitesse",
			6: "Intensité",
		};

		const adaptedData = userPerformanceData.data.map((item) => {
			const newName = activityNameMap[item.kind];
			return {
				subject: newName,
				value: item.value,
			};
		});

		this.setState({ data: adaptedData });
	}

	render() {
		return (
			<div className="performances">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart
						cx="50%"
						cy="50%"
						outerRadius="70%"
						data={this.state.data}
					>
						<PolarGrid />
						<PolarAngleAxis
							dataKey="subject"
							style={{ fontSize: "12px", fontWeight: "500" }}
						/>

						<Radar
							name="User Performance"
							dataKey="value"
							stroke="#FFFFFF"
							strokeWidth={0.5}
							fill="#FF0101B2"
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
