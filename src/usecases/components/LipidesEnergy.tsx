import { getUserDataInMemory } from "../get-user-data";
import lipides from '../../assets/fat-icon.png';

const LipidesEnergy = () => {
	const userData = getUserDataInMemory();
	const lipid = userData.keyData.lipidCount;

	return (
		<div className="energy-display">
			<img src={lipides} alt="Proteines Icon" />
			<p>
				{lipid} g
				<span>Lipides</span>
			</p>
		</div>
	);
};

export default LipidesEnergy;
