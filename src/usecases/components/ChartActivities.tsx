import "../../styles/chartActivities.scss";
import CaloriesEnergy from "./CaloriesEnergy.tsx";
import GlucidesEnergy from "./GlucidesEnergy.tsx";
import LipidesEnergy from "./LipidesEnergy.tsx";
import ProteinesEnergy from "./ProteinesEnergy.tsx";
import ActivityChart from "./ActivityChart.tsx";
import LineChartObjective from "./lineChartObjective.tsx";
const ChartActivities = () => {
	return (
		<div>
			<div className="main-chart">
				<div className="daily-activity">
					<ActivityChart />
				</div>
				<div className="average-duration">
					<LineChartObjective/>
				</div>
				<div className="calories-container">
					<div className="calories-box">
						<div className="calories-containr__box">
							<CaloriesEnergy />
						</div>
						<div className="proteines-container__box">
							<ProteinesEnergy />
						</div>
						<div className="glucides-container__box">
							<GlucidesEnergy />
						</div>
						<div className="lipides-container__box">
							<LipidesEnergy />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartActivities;
