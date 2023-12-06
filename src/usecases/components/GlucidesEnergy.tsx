import { getUserDataInMemory } from "../get-user-data";
import glucides from '../../assets/carbs-icon.png';

const GlucidesEnergy = () => {
	const userData = getUserDataInMemory();
	const carbohydrateCount = userData.keyData.carbohydrateCount;

	return (
		<div className="energy-display">
			<img src={glucides} alt="Proteines Icon" />
			<p>
				{carbohydrateCount} kcal
				<span>Proteines</span>
			</p>
		</div>
	);
};

export default GlucidesEnergy;
