import { PureComponent } from "react";
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from "recharts";

const USER_MAIN_DATA = [
	{
		id: 12,
		userInfos: {
			firstName: "Karl",
			lastName: "Dovineau",
			age: 31,
		},
		todayScore: 105,
		keyData: {
			calorieCount: 1930,
			proteinCount: 155,
			carbohydrateCount: 290,
			lipidCount: 50,
		},
	},
];

const data = USER_MAIN_DATA.map((item) => ({
	name: item.userInfos.firstName,
	uv: item.todayScore,
}));

const style = {
	top: "80%",
	right: 50,
	transform: "translate(-25%, -700%)",
	lineHeight: "24px",
};

export default class ScoreChart extends PureComponent {
	render() {
		return (
			<div className="score-chart">
				<ResponsiveContainer width="100%" height={"100%"}>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="80%"
						startAngle={200}
						endAngle={30}
						barSize={10}
						data={data}
					>
						<RadialBar minAngle={0} background clockWise dataKey="uv" />
						<Legend
							iconSize={0}
							layout="horizontal"
							verticalAlign="middle"
							wrapperStyle={style}
						/>
					</RadialBarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
