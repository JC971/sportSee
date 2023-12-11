import "../../styles/chartActivities.scss";

import { ActivityChart } from "./ActivityChart.tsx";
import LineChartObjective from "./lineChartObjective.tsx";
import PerformanceRadarChart from "./PerformanceRadarChart.tsx";
import ScoreChart from "./ScoreChart.tsx";
import { CaloriesBox } from "./CaloriesBox.tsx";
import type { UserDataResponse } from "../get-user-data";

type ChartActivitiesProps = {
	user: UserDataResponse;
};

const ChartActivities = ({ user }: ChartActivitiesProps) => {
	return (
		<>
			<div>
				<ActivityChart userId={user.id} />
				<LineChartObjective />
				<PerformanceRadarChart />
				<ScoreChart />
			</div>
			<CaloriesBox keyData={user.keyData} />
		</>
	);
};

export default ChartActivities;
