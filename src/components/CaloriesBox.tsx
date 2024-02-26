import { Energy } from "./Energy/Energy.tsx";
//import { KeyData } from "../usecases/get-user-data.ts";
import { KeyData } from "../model/user.interface.ts";
import "../assets/ProteinIcon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import CaloriesIcon from "../assets/calories-icon.svg";
import lipides from "../assets/fat-icon.svg";
import glucides from "../assets/glucides-icon.png";

type CaloriesBoxProps = {
	keyData: KeyData;
};

export const CaloriesBox = ({ keyData }: CaloriesBoxProps) => {
	return (
		<div className="calories-container">
			<Energy
				title="Calories"
				count={keyData.calorieCount}
				icon={<img src={CaloriesIcon} alt="Calories" />}
				//iconName="calories"
			/>
			<Energy
				title="Proteines"
				count={keyData.proteinCount}
				icon={<img src={proteinIcon} alt="Proteines" />}
			/>
			<Energy
				title="Glucides"
				count={keyData.carbohydrateCount}
				icon={<img src={glucides} />}
			/>
			<Energy
				title="Lipides"
				count={keyData.lipidCount}
				icon={<img src={lipides} />}
			/>
		</div>
	);
};


