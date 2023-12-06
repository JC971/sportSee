import calories from "../../assets/calories-icon.png";
import { getUserDataInMemory } from "../get-user-data";


const CaloriesEnergy = () => {
	const userData = getUserDataInMemory();
	const calorieCount = userData.keyData.calorieCount;

	return (
		<div className="energy-display">
			<img src={calories} alt="Calories Icon" />
            <p>{calorieCount} kcal
             <span>Calories</span>
                    
            </p>
		</div>
	);
};

export default CaloriesEnergy;
