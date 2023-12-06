import { getUserDataInMemory } from "../get-user-data";
import proteines from "../../assets/protein-icon.png"



const ProteinesEnergy = () => {
	const userData = getUserDataInMemory();
	const proteinCount = userData.keyData.proteinCount;

	return (
		<div className="energy-display">
			<img src={proteines} alt="Proteines Icon" />
			<p>
				{proteinCount} g
				<span>Proteines</span>
			</p>
		</div>
	);
};

export default ProteinesEnergy;
