import '../../styles/chartActivities.scss'
import CaloriesEnergy from './CaloriesEnergy.tsx';
import GlucidesEnergy from './GlucidesEnergy.tsx';
import ProteinesEnergy from './ProteinesEnergy.tsx';
const ChartActivities = () => {
    return (
			<div>
				<div className="main-chart">
					<div className="chart-welcome">
						<h2>bienvenu dans ma boite</h2>
					</div>
					<div className="calories-container">
						<div className="calories-containr__box">
							<CaloriesEnergy />
                    </div>
                    <div className="proteines-container__box">
                        <ProteinesEnergy/>
                    </div>
                    <div className="glucides-container__box">
                        <GlucidesEnergy/>
                    </div>
					</div>
				</div>
			</div>
		);
};

export default ChartActivities;