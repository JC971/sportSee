import "./Energy.scss";
import { ReactNode } from "react";

type EnergyProps = {
	count: number;
	title: string;
	icon?: ReactNode; // TODO enlever le "?" quand il y aura les icons
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
