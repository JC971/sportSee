import "../../styles/chartActivities.scss";
import CaloriesEnergy from "./CaloriesEnergy.tsx";
import GlucidesEnergy from "./GlucidesEnergy.tsx";
import LipidesEnergy from "./LipidesEnergy.tsx";
import ProteinesEnergy from "./ProteinesEnergy.tsx";
import ActivityChart from "./ActivityChart.tsx";
const ChartActivities = () => {
	return (
		<div>
			<div className="main-chart">
				<div className="chart-welcome">
					<ActivityChart/>
				</div>
				<div className="daily-activity">
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
