import React from "react";
interface RondProps {
	size: number;
	color: string;
}

const Rond: React.FC<RondProps> = ({ size, color }) => (
	<svg height={size} width={size}>
		<circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
	</svg>
);

export default Rond;
