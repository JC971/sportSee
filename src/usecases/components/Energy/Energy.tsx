import "./Energy.scss";
import { ReactNode } from "react";

type EnergyProps = {
	count: number;
	title: string;
	icon: ReactNode; 
};

export const Energy = ({ count, title, icon }: EnergyProps) => {
	return (
		<div className="energy">
			{icon}
			<p>
				{count} kcal
				<span>{title}</span>
			</p>
		</div>
	);
};
